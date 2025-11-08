/**
 * 💹 SMART MOCK STOCK UPDATER (realistic version)
 * -------------------------------------------------------
 * ✅ Lấy giá thật 1 lần từ VNDirect → Giả lập realtime biến động quanh giá đó
 * ✅ Cập nhật Firestore mỗi 2 giây
 * ✅ Dành cho test realtime sát thực tế mà không phụ thuộc API liên tục
 */

import fetch from "node-fetch";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

// ⚙️ Firebase Config của bạn
const firebaseConfig = {
  apiKey: "AIzaSyA51v4R1vlHOwSPxkefsE7yyZxEvb5qXvQ",
  authDomain: "exe201-gr6.firebaseapp.com",
  projectId: "exe201-gr6",
  storageBucket: "exe201-gr6.firebasestorage.app",
  messagingSenderId: "850348804723",
  appId: "1:850348804723:web:bdf3aa06dd72b291387806",
  measurementId: "G-SW8L6G0LNC",
};

// 🔥 Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🧩 Danh sách mã cổ phiếu Việt Nam phổ biến
const STOCKS = ["VNM", "FPT", "HPG", "VIC", "MWG", "SSI", "VCB", "CTG", "BID", "GAS"];

// 🔹 Kiểu dữ liệu nhận từ VNDirect
interface VNDirectStock {
  code: string;
  close: number;
  pctChange: number;
  nmVolume: number;
}
interface VNDirectResponse {
  data?: VNDirectStock[];
}

// 🧠 Bộ nhớ tạm lưu giá thật
const BASE_PRICES: Record<string, number> = {};

// 📡 Lấy giá thật 1 lần từ VNDirect
async function fetchInitialPrices() {
  console.log("📡 Đang tải giá cổ phiếu thật từ VNDirect...");

  for (const symbol of STOCKS) {
    try {
      const url = `https://finfoapi-sg.vndirect.com.vn/v4/stock_prices/?q=code:${symbol}&size=1&sort=date:desc`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Lỗi fetch ${symbol}: ${res.statusText}`);

      const json = (await res.json()) as VNDirectResponse;
      const item = json.data?.[0];
      if (!item) throw new Error(`Không có dữ liệu cho ${symbol}`);

      BASE_PRICES[symbol] = item.close;
      console.log(`✅ ${symbol} giá gốc: ${item.close.toLocaleString("vi-VN")}`);
    } catch (err) {
      console.error(`❌ Lỗi khi tải ${symbol}:`, (err as Error).message);
      // Nếu lỗi, dùng giá mặc định
      BASE_PRICES[symbol] = Math.round(20000 + Math.random() * 80000);
    }
  }

  console.log("✨ Hoàn tất tải giá thực!");
}

// 🎲 Sinh giá giả lập quanh giá thực
function randomizePrice(base: number): number {
  const changePercent = (Math.random() * 3 - 1.5) / 100; // ±1.5%
  return Math.round(base * (1 + changePercent));
}

// 🔁 Cập nhật Firestore
async function updateStocks() {
  console.log("🔄 Đang cập nhật dữ liệu cổ phiếu giả lập...");

  for (const symbol of STOCKS) {
    const basePrice = BASE_PRICES[symbol] || 30000;
    const newPrice = randomizePrice(basePrice);
    const changePercent = ((newPrice - basePrice) / basePrice) * 100;

    const trend = changePercent >= 0 ? "up" : "down";
    const risk =
      Math.abs(changePercent) < 0.6
        ? "Thấp"
        : Math.abs(changePercent) < 1.2
        ? "Trung bình"
        : "Cao";

    const stockData = {
      symbol,
      name: symbol,
      price: newPrice.toLocaleString("vi-VN"),
      change:
        (changePercent >= 0 ? "+" : "") + changePercent.toFixed(2) + "%",
      trend,
      risk,
      volume: (Math.random() * 8 + 1).toFixed(1) + "M",
      updatedAt: new Date().toISOString(),
    };

    await setDoc(doc(collection(db, "stocks_top"), symbol), stockData);
  }

  console.log("✅ Đã cập nhật xong!\n");
}

// 🚀 Chạy script
(async () => {
  await fetchInitialPrices(); // Lấy giá thực 1 lần
  updateStocks(); // Cập nhật lần đầu
  setInterval(updateStocks, 2000); // Lặp mỗi 2 giây
})();
