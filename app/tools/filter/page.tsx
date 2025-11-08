"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function FilterToolPage() {
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

      <h1 className="text-2xl font-bold mb-2">Bộ lọc cổ phiếu</h1>
      <p className="text-gray-600 mb-4">
        Tại đây bạn có thể thêm các tiêu chí tài chính để lọc cổ phiếu theo ý muốn.
      </p>

      {/* Nội dung chính */}
      <div className="border rounded-lg p-6 bg-white shadow-sm">
        <p className="text-gray-500">🚧 Tính năng lọc cổ phiếu đang được phát triển...</p>
      </div>
    </div>
  );
}
