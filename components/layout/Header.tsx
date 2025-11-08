"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || user.email || "Người dùng");
        setUserPhoto(user.photoURL);
        setIsPremium(user.email === "truydit2003@gmail.com");
      } else {
        setUserName(null);
        setUserPhoto(null);
        setIsPremium(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
<header className="fixed top-0 left-0 w-full z-50 px-4 lg:px-6 h-16 flex items-center border-b bg-white shadow-md">
      {/* Logo */}
      <Link className="flex items-center justify-center" href="/">
        <div className="relative">
          <BarChart3 className="h-7 w-7 text-blue-600" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Stock Radar
        </span>
      </Link>

      {/* Navigation */}
      <nav className="ml-8 flex gap-6">
        <Link className="text-sm font-medium hover:text-blue-600 transition-colors duration-200" href="/dashboard">
          Dashboard
        </Link>
        <Link className="text-sm font-medium hover:text-blue-600 transition-colors duration-200" href="/stocks">
          Cổ phiếu
        </Link>
        <Link className="text-sm font-medium hover:text-blue-600 transition-colors duration-200" href="/analysis">
          Phân tích
        </Link>
        <Link className="text-sm font-medium hover:text-blue-600 transition-colors duration-200" href="/community">
          Cộng đồng
        </Link>
      </nav>

      {/* Góc phải */}
      <div className="ml-auto flex items-center gap-3">
        {userName ? (
          <div className="flex items-center gap-3 bg-white/70 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
            {userPhoto ? (
              <Image
                src={userPhoto}
                alt="avatar"
                width={32}
                height={32}
                className="rounded-full border border-gray-300"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                {userName.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="flex flex-col leading-tight">
              <span className="text-sm font-medium text-gray-800">{userName}</span>
              <span
                className={`text-xs ${
                  isPremium ? "text-yellow-600 font-semibold" : "text-green-600"
                }`}
              >
                {isPremium ? "Premium ✨" : "Basic 🌱"}
              </span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 hover:text-red-500 transition"
              onClick={() => signOut(auth)}
            >
              Đăng xuất
            </Button>
          </div>
        ) : (
          <Link href="/login">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-blue-50 transition-colors duration-200"
            >
              Đăng nhập
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
