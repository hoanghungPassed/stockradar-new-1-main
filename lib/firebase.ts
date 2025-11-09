// ✅ firebase.ts — cấu hình Firebase cho Next.js + TypeScript

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// 🔹 Cấu hình Firebase project của bạn
const firebaseConfig = {
  apiKey: "AIzaSyA51v4R1vlHOwSPxkefsE7yyZxEvb5qXvQ",
  authDomain: "exe201-gr6.firebaseapp.com",
  projectId: "exe201-gr6",
  storageBucket: "exe201-gr6.firebasestorage.app",
  messagingSenderId: "850348804723",
  appId: "1:850348804723:web:bdf3aa06dd72b291387806",
  measurementId: "G-SW8L6G0LNC",
};

// ⚙️ Khởi tạo app chỉ một lần
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔐 Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);

// 📊 Hàm khởi tạo Analytics (chỉ chạy ở client)
export const initAnalytics = async () => {
  if (typeof window === "undefined") return null;

  const supported = await isSupported();
  if (!supported) {
    console.warn("⚠️ Trình duyệt không hỗ trợ Firebase Analytics.");
    return null;
  }

  const analytics = getAnalytics(app);
  console.log("✅ Firebase Analytics đã bật!");
  return analytics;
};

export default app;