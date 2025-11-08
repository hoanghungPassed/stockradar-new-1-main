"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ValuationToolPage() {
  const router = useRouter();

  return (
    <div className="p-8">
      {/* Nút trở về */}
      <Button
        variant="outline"
        className="mb-6 flex items-center gap-2"
        onClick={() => router.push("/analysis")}
      >
        <ArrowLeft className="w-4 h-4" />
        Trở về Công cụ phân tích
      </Button>

      <h1 className="text-2xl font-bold mb-2">Mô hình định giá</h1>
      <p className="text-gray-600 mb-4">
        Đây là nơi bạn có thể áp dụng các mô hình định giá như DCF, P/E, P/B...
      </p>

      {/* Nội dung chính */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <p className="text-gray-500">🚧 Công cụ định giá đang được phát triển...</p>
      </div>
    </div>
  );
}
