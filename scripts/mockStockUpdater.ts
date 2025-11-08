/**
 * 🔥 MOCK STOCK UPDATER for Firestore (TypeScript version)
 * -------------------------------------------------------
 * ✅ Tự động cập nhật dữ liệu cổ phiếu giả lập lên Firestore mỗi 5 giây
 * ✅ Giúp bạn test tính năng real-time trên DashboardPage
 * ✅ Tương thích Next.js + TypeScript (chạy bằng ts-node)
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// ⚙️ Cấu hình Firebase của bạn
const firebaseConfig = {
  apiKey: "AIzaSyA51v4R1vlHOwSPxkefsE7yyZxEvb5qXvQ",
  authDomain: "exe201-gr6.firebaseapp.com",
  projectId: "exe201-gr6",
  storageBucket: "exe201-gr6.firebasestorage.app",
  messagingSenderId: "850348804723",
  appId: "1:850348804723:web:bdf3aa06dd72b291387806",
  measurementId: "G-SW8L6G0LNC",
};

// 🔥 Khởi tạo Firebase & Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🧩 Danh sách cổ phiếu mẫu
interface StockItem {
  symbol: string;
  name: string;
  basePrice: number;
}

const STOCKS: StockItem[] = [
  { symbol: "VNM", name: "Vinamilk", basePrice: 85000 },
  { symbol: "FPT", name: "FPT Corporation", basePrice: 142000 },
  { symbol: "VIC", name: "Vingroup", basePrice: 45200 },
  { symbol: "HPG", name: "Hòa Phát Group", basePrice: 28100 },
  { symbol: "MWG", name: "Mobile World", basePrice: 38000 },
  { symbol: "SSI", name: "SSI Securities", basePrice: 33000 },
];

// 🧠 Hàm random giá quanh giá gốc
const randomPrice = (base: number): number => {
  const change = base * (Math.random() * 0.04 - 0.02); // ±2%
  return Math.round(base + change);
};

// 📊 Tạo dữ liệu cổ phiếu mới
const generateStockData = (stock: StockItem) => {
  const newPrice = randomPrice(stock.basePrice);
  const changePercent = ((newPrice - stock.basePrice) / stock.basePrice) * 100;

  const trend = changePercent >= 0 ? "up" : "down";
  const risk =
    Math.abs(changePercent) < 0.8
      ? "Thấp"
      : Math.abs(changePercent) < 1.5
      ? "Trung bình"
      : "Cao";

  return {
    symbol: stock.symbol,
    name: stock.name,
    price: newPrice.toLocaleString("vi-VN"),
    change:
      (changePercent >= 0 ? "+" : "") + changePercent.toFixed(2) + "%",
    trend,
    risk,
    volume: (Math.random() * 5 + 1).toFixed(1) + "M",
    updatedAt: new Date().toISOString(),
  };
};

// 🔁 Cập nhật lên Firestore
const updateStocks = async (): Promise<void> => {
  console.log("🔄 Đang cập nhật dữ liệu cổ phiếu giả lập...");

  for (const stock of STOCKS) {
    const data = generateStockData(stock);
    const ref = doc(collection(db, "stocks_top"), stock.symbol);
    await setDoc(ref, data);
  }

  console.log("✅ Đã cập nhật xong!");
};

// 🚀 Chạy cập nhật lặp lại mỗi 5 giây
updateStocks();
setInterval(updateStocks, 5000);
