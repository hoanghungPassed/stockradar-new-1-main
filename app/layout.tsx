import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import Header from "@/components/layout/Header"; // ✅ Thêm import Header

export const metadata: Metadata = {
  title: "Stock Radar",
  description: "Đầu tư thông minh với Stock Radar",
  icons: {
    icon: "/favicon.ico",
  },
};

// 🔹 Layout tổng của ứng dụng
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <ToastProvider /> {/* ✅ Thông báo toàn cục */}
        <Header /> {/* ✅ Thêm Header để hiển thị avatar, tên, Premium/Basic */}
        <main className="pt-16">{children}</main> {/* ✅ Nội dung trang */}
      </body>
    </html>
  );
}
