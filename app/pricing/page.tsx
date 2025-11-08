"use client";

import Link from "next/link";
import { BarChart3, Check, Star, Zap, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  const plans = [
    {
      name: "Dùng thử",
      price: "Miễn phí",
      duration: "7 ngày",
      color: "from-gray-100 to-gray-50",
      icon: Gift,
      features: ["Truy cập giới hạn", "Tin tức cơ bản", "Cộng đồng mở"],
      link: "/register?plan=trial",
    },
    {
      name: "Basic (1 tháng)",
      price: "250.000₫",
      duration: "1 tháng",
      color: "from-blue-100 to-blue-50",
      icon: Clock,
      features: [
        "Toàn bộ tính năng Dùng thử",
        "Gợi ý cổ phiếu cơ bản",
        "Tin tức thị trường",
        "Cộng đồng nhà đầu tư",
      ],
      link: "/register?plan=basic",
    },
    {
      name: "Premium (3 tháng)",
      price: "712.500₫",
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
      link: "/register?plan=premium",
    },
    {
      name: "Premium Plus (1 năm)",
      price: "2.950.000₫",
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
      link: "/register?plan=premium-plus",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      

      {/* Content */}
      <main className="flex-1 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-3">Chọn gói phù hợp với bạn</h1>
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
                  <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
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
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" asChild>
                    <Link href={plan.link}>Chọn gói này</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <section className="bg-white rounded-xl shadow-md p-6 mt-12">
            <h2 className="text-2xl font-bold mb-4">So sánh tính năng</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-3 text-left font-medium">Tính năng</th>
                    <th className="p-3 text-center">Dùng thử</th>
                    <th className="p-3 text-center">Basic</th>
                    <th className="p-3 text-center">Premium</th>
                    <th className="p-3 text-center">Premium Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["Tin tức cơ bản", true, true, true, true],
                    ["Phân tích cổ phiếu", false, false, true, true],
                    ["Danh mục chuyên gia", false, false, true, true],
                    ["Hỗ trợ 1-1", false, false, false, true],
                    ["Khóa học độc quyền", false, false, false, true],
                  ].map(([feature, ...availability], i) => (
                    <tr key={i} className="text-gray-700">
                      <td className="p-3 font-medium">{feature}</td>
                      {availability.map((val, j) => (
                        <td key={j} className="p-3 text-center">
                          {val ? (
                            <Check className="h-5 w-5 text-green-600 mx-auto" />
                          ) : (
                            "-"
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12 text-left max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center mb-4">Câu hỏi thường gặp</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">❓ Tôi có thể nâng cấp bất kỳ lúc nào không?</p>
                <p>✔️ Có, bạn có thể nâng cấp hoặc hạ cấp gói bất kỳ lúc nào.</p>
              </div>
              <div>
                <p className="font-semibold">❓ Có hoàn tiền nếu hủy sớm không?</p>
                <p>✔️ Gói sẽ duy trì đến hết chu kỳ đã thanh toán, không tính phí hủy.</p>
              </div>
              <div>
                <p className="font-semibold">❓ Dữ liệu có được cập nhật real-time không?</p>
                <p>✔️ Premium và Premium Plus được cập nhật nhanh hơn và chi tiết hơn.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
