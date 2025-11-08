"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  Zap,
  TrendingUp,
  Star,
  Play,
  ChevronDown,
  Clock,
  Gift,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// phần code HomePage của bạn giữ nguyên ở dưới đây...


export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      name: "Nguyễn Minh Tuấn",
      role: "Nhà đầu tư cá nhân",
      content: "Stock Radar đã giúp tôi tăng lợi nhuận 35% trong 6 tháng qua. Các phân tích chuyên sâu rất chính xác.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Trần Thị Hương",
      role: "Trader chuyên nghiệp",
      content:
        "Công cụ phân tích kỹ thuật và cảnh báo real-time của Stock Radar là không thể thiếu trong công việc của tôi.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Lê Văn Đức",
      role: "Quản lý quỹ đầu tư",
      content: "Dữ liệu chính xác và giao diện trực quan giúp tôi đưa ra quyết định đầu tư nhanh chóng và hiệu quả.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-5 bg-cover bg-center"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative px-6 md:px-6 mx-auto">
          <div
            className={`flex flex-col items-center space-y-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 animate-bounce">
                🚀 Mới: AI phân tích cổ phiếu thông minh
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                Đầu tư thông minh với{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                  Stock Radar
                </span>
              </h1>
              <p className="mx-auto max-w-[800px] text-gray-600 text-lg md:text-xl leading-relaxed">
                Nền tảng kết nối nhà đầu tư với các cơ hội đầu tư tốt nhất. Phân tích chuyên sâu, gợi ý từ chuyên gia,
                và cộng đồng đầu tư sôi động.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                asChild
              >
                <Link href="/dashboard">
                  Bắt đầu ngay <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group hover:bg-blue-50 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/stocks">
                  <Play className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
                  Xem demo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Nhà đầu tư</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">₫2.5T+</div>
                <div className="text-sm text-gray-600">Giá trị giao dịch</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Độ chính xác</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Tính năng <span className="text-blue-600">nổi bật</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">Tất cả công cụ bạn cần để đầu tư thành công</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Gợi ý đầu tư chuyên nghiệp",
                description:
                  "Danh mục cổ phiếu được đội ngũ chuyên gia phân tích kỹ lưỡng với chiến lược rõ ràng và xác suất tăng trưởng cao.",
                color: "blue",
                delay: "0",
              },
              {
                icon: BarChart3,
                title: "Phân tích tài chính chuyên sâu",
                description:
                  "Trích xuất và diễn giải thông tin tài chính quan trọng: doanh thu, lợi nhuận, ROE, nợ, EPS để hiểu rõ tiềm năng công ty.",
                color: "green",
                delay: "200",
              },
              {
                icon: Shield,
                title: "Đánh giá rủi ro thông minh",
                description:
                  "Hệ thống chấm điểm rủi ro theo các tiêu chí định lượng giúp nhà đầu tư mới tránh những quyết định sai lầm.",
                color: "red",
                delay: "400",
              },
              {
                icon: Zap,
                title: "Công cụ lọc cổ phiếu",
                description:
                  "Bộ lọc mạnh mẽ dựa trên tăng trưởng lợi nhuận, chỉ số tài chính, ngành nghề, vốn hóa để tự khám phá cơ hội.",
                color: "yellow",
                delay: "600",
              },
              {
                icon: Users,
                title: "Cộng đồng đầu tư",
                description:
                  "Forum trao đổi, chia sẻ kinh nghiệm với cộng đồng nhà đầu tư. Hệ thống đánh giá uy tín và thẻ mã chứng khoán.",
                color: "purple",
                delay: "800",
              },
              {
                icon: Star,
                title: "Khóa học & Livestream",
                description:
                  "Kiến thức đầu tư cơ bản qua video, bài viết, livestream từ các chuyên gia hàng đầu trong lĩnh vực.",
                color: "orange",
                delay: "1000",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Khách hàng <span className="text-blue-600">nói gì</span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
              Hàng nghìn nhà đầu tư đã tin tưởng Stock Radar
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-8 md:p-12">
                    <div className="text-center">
                      <div className="mb-6">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-100"
                        />
                        <h3 className="font-bold text-xl">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                      <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-blue-600 w-8" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* Pricing Section */}
<section className="w-full py-20 md:py-28 bg-gradient-to-b from-white to-blue-50">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
        Gói <span className="text-blue-600">dịch vụ</span>
      </h2>
      <p className="mx-auto max-w-[700px] text-gray-600 text-lg">
        Linh hoạt – tiết kiệm – phù hợp cho mọi nhà đầu tư
      </p>
    </div>

    {/* Pricing Cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {/* Gói Dùng thử */}
      <Card className="relative border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-100 to-gray-50">
        <CardHeader>
          <div className="flex justify-center mb-3">
            <Gift className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl font-bold">Dùng thử</CardTitle>
          <p className="text-gray-600 mt-1">7 ngày</p>
          <p className="text-3xl font-semibold text-blue-700 mt-3">Miễn phí</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-left space-y-2 text-sm text-gray-700">
            {["Truy cập giới hạn", "Tin tức cơ bản", "Cộng đồng mở"].map((f, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" /> {f}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" asChild>
            <Link href="/register?plan=trial">Chọn gói này</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Gói Basic */}
      <Card className="relative border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-100 to-blue-50">
        <CardHeader>
          <div className="flex justify-center mb-3">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl font-bold">Basic (1 tháng)</CardTitle>
          <p className="text-gray-600 mt-1">1 tháng</p>
          <p className="text-3xl font-semibold text-blue-700 mt-3">250.000₫</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-left space-y-2 text-sm text-gray-700">
            {[
              "Toàn bộ tính năng Dùng thử",
              "Gợi ý cổ phiếu cơ bản",
              "Tin tức thị trường",
              "Cộng đồng nhà đầu tư",
            ].map((f, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" /> {f}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" asChild>
            <Link href="/register?plan=basic">Chọn gói này</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Gói Premium */}
      <Card className="relative border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-indigo-100 to-indigo-50">
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
          -15%
        </Badge>
        <CardHeader>
          <div className="flex justify-center mb-3">
            <Star className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl font-bold">Premium (3 tháng)</CardTitle>
          <p className="text-gray-600 mt-1">3 tháng</p>
          <p className="text-3xl font-semibold text-blue-700 mt-3">712.500₫</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-left space-y-2 text-sm text-gray-700">
            {[
              "Tất cả tính năng Basic",
              "Phân tích cổ phiếu chuyên sâu",
              "Bộ lọc nâng cao",
              "Danh mục chuyên gia",
            ].map((f, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" /> {f}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4" asChild>
            <Link href="/register?plan=premium">Chọn gói này</Link>
          </Button>
        </CardContent>
      </Card>

      {/* Gói Premium Plus */}
      <Card className="relative border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-100 to-pink-50">
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md">
          -20%
        </Badge>
        <CardHeader>
          <div className="flex justify-center mb-3">
            <Zap className="h-8 w-8 text-purple-600" />
          </div>
          <CardTitle className="text-xl font-bold">Premium Plus (1 năm)</CardTitle>
          <p className="text-gray-600 mt-1">12 tháng</p>
          <p className="text-3xl font-semibold text-purple-700 mt-3">2.950.000₫</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="text-left space-y-2 text-sm text-gray-700">
            {[
              "Toàn bộ tính năng Premium",
              "Hỗ trợ chuyên gia 1-1",
              "Phân tích nâng cao AI",
              "Khóa học độc quyền",
            ].map((f, i) => (
              <li key={i} className="flex items-center">
                <Check className="h-4 w-4 text-green-600 mr-2" /> {f}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-4" asChild>
            <Link href="/register?plan=premium-plus">Chọn gói này</Link>
          </Button>
        </CardContent>
      </Card>
    </div>

    {/* Comparison Table */}
    <section className="bg-white rounded-xl shadow-md p-6 mt-16">
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
              ["Phân tích cổ phiếu", false, true, true, true],
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
</section>


      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6 text-center mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Sẵn sàng bắt đầu hành trình đầu tư?
          </h2>
          <p className="mx-auto max-w-[600px] text-blue-100 text-lg mb-8">
            Tham gia cùng hàng nghìn nhà đầu tư thông minh đã chọn Stock Radar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              asChild
            >
              <Link href="/register">
                Bắt đầu miễn phí
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/contact">Liên hệ tư vấn</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <Link className="flex items-center" href="/">
                <BarChart3 className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Stock Radar</span>
              </Link>
              <p className="text-gray-400">Nền tảng đầu tư thông minh hàng đầu Việt Nam</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Sản phẩm</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/stocks" className="hover:text-white transition-colors">
                    Cổ phiếu
                  </Link>
                </li>
                <li>
                  <Link href="/analysis" className="hover:text-white transition-colors">
                    Phân tích
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-white transition-colors">
                    Cộng đồng
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Công ty</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Về chúng tôi
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Tuyển dụng
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Hỗ trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white transition-colors">
                    Trung tâm trợ giúp
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Điều khoản
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Bảo mật
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Stock Radar. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}