"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginGoogleButton() {
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // 🔹 Import động Firebase chỉ khi client chạy
      const { GoogleAuthProvider, signInWithPopup } = await import("firebase/auth");
      const { auth, db } = await import("@/lib/firebase");
      const { doc, setDoc, getDoc } = await import("firebase/firestore");

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // ✅ Kiểm tra tài khoản Premium
      if (user.email === "truydit2003@gmail.com") {
        toast.success("🎖️ Bạn đang đăng nhập bằng tài khoản Premium!");
      } else {
        toast.info("🌱 Bạn đang đăng nhập bằng tài khoản Basic.");
      }

      // 🔐 Lưu Firestore
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          name: user.displayName || "",
          accountType:
            user.email === "truydit2003@gmail.com" ? "premium" : "basic",
          createdAt: new Date(),
        });
      }

      console.log("✅ Đăng nhập thành công:", user.email);
    } catch (error: any) {
      console.error("❌ Lỗi đăng nhập:", error);
      toast.error("Đăng nhập thất bại. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className="w-full py-2 mt-4 bg-white text-black border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2"
    >
      {loading ? "Đang đăng nhập..." : "Đăng nhập với Google"}
    </button>
  );
}
