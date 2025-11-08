"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Check,
  Star,
  Zap,
  Gift,
  Clock,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  // ⚙️ Thông tin tài khoản nhận tiền (của bạn)
  const BANK = "MB"; // MB Bank
  const ACCOUNT = "686820388888"; // 🏦 Số tài khoản nhận
  const ACCOUNT_NAME = "NGUYEN HOANG HUNG"; // 👤 Tên chủ tài khoản
  const QR_BASE = `https://img.vietqr.io/image/${BANK}-${ACCOUNT}-compact2.png`;

  const plans = [
    {
      name: "Dùng thử",
      price: "Miễn phí",
      amount: 0,
      duration: "7 ngày",
      color: "from-gray-100 to-gray-50",
      icon: Gift,
      features: ["Truy cập giới hạn", "Tin tức cơ bản", "Cộng đồng mở"],
    },
    {
      name: "Basic (1 tháng)",
      price: "250.000₫",
      amount: 250000,
      duration: "1 tháng",
      color: "from-blue-100 to-blue-50",
      icon: Clock,
      features: [
        "Toàn bộ tính năng Dùng thử",
        "Gợi ý cổ phiếu cơ bản",
        "Tin tức thị trường",
        "Cộng đồng nhà đầu tư",
      ],
    },
    {
      name: "Premium (3 tháng)",
      price: "712.500₫",
      amount: 712500,
      duration: "3 tháng",
      discount: "-15%",
      color: "from-indigo-100 to-indigo-50",
      icon: Star,
      features: [
        "Tất cả tính năng Basic",
        "Phân tích cổ phiếu chuyên sâu",
        "Bộ lọc nâng cao",
        "Danh mục chuyên gia",
      ],
    },
    {
      name: "Premium Plus (1 năm)",
      price: "2.950.000₫",
      amount: 2950000,
      duration: "12 tháng",
      discount: "-20%",
      color: "from-purple-100 to-pink-50",
      icon: Zap,
      features: [
        "Toàn bộ tính năng Premium",
        "Hỗ trợ chuyên gia 1-1",
        "Phân tích nâng cao AI",
        "Khóa học độc quyền",
      ],
    },
  ];

  const handleSelect = (plan: any) => {
    if (plan.amount === 0) return; // Dùng thử miễn phí thì không cần QR
    const qrUrl = `${QR_BASE}?amount=${plan.amount}&addInfo=${encodeURIComponent(
      `StockRadar_${plan.name}`
    )}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
    setSelectedPlan({ ...plan, qrUrl });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="/">
          <BarChart3 className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold">Stock Radar</span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-3">
              Chọn gói phù hợp với bạn
            </h1>
            <p className="text-gray-600 text-lg">
              Linh hoạt – tiết kiệm – phù hợp cho mọi nhà đầu tư
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${plan.color}`}
              >
                {plan.discount && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
                    {plan.discount}
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex justify-center mb-3">
                    <plan.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 mt-1">{plan.duration}</p>
                  <p className="text-3xl font-semibold text-blue-700 mt-3">
                    {plan.price}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-4 w-4 text-green-600 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>

                  {plan.amount > 0 ? (
                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
                      onClick={() => handleSelect(plan)}
                    >
                      Chọn gói này
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full mt-4 border-gray-400 text-gray-600 cursor-not-allowed"
                    >
                      Miễn phí
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* === MODAL HIỂN THỊ MÃ QR === */}
          <Dialog open={!!selectedPlan} onOpenChange={() => setSelectedPlan(null)}>
            <DialogContent className="max-w-md mx-auto">
              {selectedPlan && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold text-blue-700">
                      Thanh toán gói {selectedPlan.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="text-center space-y-4">
                    <img
                      src={selectedPlan.qrUrl}
                      alt="QR thanh toán"
                      className="w-60 h-60 mx-auto rounded-lg border shadow-md"
                    />
                    <p className="text-lg font-semibold text-blue-700">
                      {selectedPlan.price}
                    </p>
                    <div className="bg-gray-50 p-3 rounded-lg text-sm">
                      <p>
                        <strong>Ngân hàng:</strong> {BANK}
                      </p>
                      <p>
                        <strong>Số tài khoản:</strong> {ACCOUNT}
                      </p>
                      <p>
                        <strong>Chủ TK:</strong> {ACCOUNT_NAME}
                      </p>
                      <p>
                        <strong>Nội dung:</strong> StockRadar_{selectedPlan.name}
                      </p>
                    </div>

                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() =>
                        alert("✅ Cảm ơn bạn! Hãy chờ xác nhận thanh toán.")
                      }
                    >
                      Tôi đã thanh toán
                    </Button>

                    <Button
                      variant="ghost"
                      className="w-full text-gray-500 mt-2"
                      onClick={() => setSelectedPlan(null)}
                    >
                      <XCircle className="h-4 w-4 mr-1 inline" />
                      Đóng
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </div>
  );
}
