"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  BarChart3, TrendingUp, DollarSign, Users, Bell, Search, Activity, Eye, Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type UserProfile = {
  uid: string;
  username?: string;
  email?: string;
  plan?: string;
  displayName?: string;
};

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(2450000000);
  const [todayProfit, setTodayProfit] = useState(45200000);
  const [me, setMe] = useState<UserProfile | null>(null);
  const [isPremium, setIsPremium] = useState(false); // ✅ Trạng thái Premium

  // Ép về /login nếu chưa đăng nhập
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "/login";
        return;
      }

      // Có user -> lấy hồ sơ Firestore
      const snap = await getDoc(doc(db, "users", user.uid));
      const data = snap.exists() ? (snap.data() as any) : {};
      const email = user.email || data.email;

      // ✅ Gmail Premium cứng
      if (email === "truydit2003@gmail.com") {
        setIsPremium(true);
      } else {
        setIsPremium(false);
      }

      setMe({
        uid: user.uid,
        displayName: user.displayName || data.username,
        username: data.username,
        email,
        plan: data.plan,
      });
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setPortfolioValue((prev) => prev + Math.random() * 1000000 - 500000);
      setTodayProfit((prev) => prev + Math.random() * 100000 - 50000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const topStocks = [
    { symbol: "VNM", name: "Vinamilk", price: "85,500", change: "+2.4%", risk: "Thấp", trend: "up", volume: "2.1M" },
    { symbol: "FPT", name: "FPT Corporation", price: "142,000", change: "+1.8%", risk: "Trung bình", trend: "up", volume: "1.8M" },
    { symbol: "VIC", name: "Vingroup", price: "45,200", change: "-0.5%", risk: "Cao", trend: "down", volume: "3.2M" },
    { symbol: "HPG", name: "Hòa Phát Group", price: "28,100", change: "+3.2%", risk: "Trung bình", trend: "up", volume: "5.1M" },
  ];

  const marketNews = [
    { title: "VN-Index tăng điểm trong phiên giao dịch sáng", time: "2 giờ trước", type: "positive" },
    { title: "Ngành ngân hàng dẫn dắt thị trường", time: "4 giờ trước", type: "neutral" },
    { title: "Cổ phiếu công nghệ có dấu hiệu phục hồi", time: "6 giờ trước", type: "positive" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      

      {/* === NỘI DUNG DASHBOARD === */}
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div
            className={`flex justify-between items-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Chào mừng trở lại{me?.displayName ? `, ${me.displayName}` : ""}! 👋
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                Theo dõi danh mục đầu tư và khám phá cơ hội mới
              </p>
            </div>

            {/* ✅ Ẩn nút nếu là Premium */}
            {!isPremium && (
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/stocks/premium">
                  <Target className="w-4 h-4 mr-2" />
                  Nâng cấp Premium
                </Link>
              </Button>
            )}
          </div>

          

          

          {/* Stats Cards (giữ nguyên nếu bạn đã có mảng và render chi tiết) */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Tổng giá trị danh mục",
                value: portfolioValue.toLocaleString("vi-VN"),
                unit: "VNĐ",
                change: "+12.5%",
                icon: DollarSign,
                color: "blue",
                trend: "up",
              },
              {
                title: "Lợi nhuận hôm nay",
                value: todayProfit.toLocaleString("vi-VN"),
                unit: "VNĐ",
                change: "+1.85%",
                icon: TrendingUp,
                color: "green",
                trend: "up",
              },
              {
                title: "Số mã đang nắm giữ",
                value: "12",
                unit: "mã",
                change: "Đa dạng hóa tốt",
                icon: BarChart3,
                color: "purple",
                trend: "neutral",
              },
              {
                title: "Điểm rủi ro",
                value: "6.2",
                unit: "/10",
                change: "Mức rủi ro trung bình",
                icon: Activity,
                color: "yellow",
                trend: "neutral",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-0 shadow-lg bg-white`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <div className="p-2 rounded-lg bg-gray-100 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-4 w-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <span className="text-sm text-gray-500">{stat.unit}</span>
                  </div>
                  <p className="text-xs mt-1 text-gray-500">{stat.change}</p>
                  {stat.color === "yellow" && <Progress value={62} className="mt-2 h-2" />}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="overflow-hidden shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardTitle className="flex items-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Cổ phiếu nổi bật hôm nay
                  </CardTitle>
                  <CardDescription className="text-blue-100">Những mã được chuyên gia khuyến nghị</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {topStocks.map((stock, index) => (
                      <div
                        key={stock.symbol}
                        className={`flex items-center justify-between p-6 border-b last:border-b-0 hover:bg-gray-50 transition-all duration-300 group ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                              stock.trend === "up" ? "from-green-400 to-green-600" : "from-red-400 to-red-600"
                            } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <span className="font-bold text-white text-sm">{stock.symbol}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {stock.name}
                            </p>
                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                              <span>{stock.symbol}</span>
                              <span>•</span>
                              <span>Vol: {stock.volume}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{stock.price}</p>
                          <div className="flex items-center space-x-2">
                            <span className={`text-sm font-medium ${stock.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                              {stock.change}
                            </span>
                            <Badge
                              variant={stock.risk === "Thấp" ? "default" : stock.risk === "Trung bình" ? "secondary" : "destructive"}
                              className="text-xs"
                            >
                              {stock.risk}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 bg-gray-50">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                      asChild
                    >
                      <Link href="/stocks">Xem tất cả cổ phiếu</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-blue-600" />
                    Biểu đồ danh mục
                  </CardTitle>
                  <CardDescription>Hiệu suất 30 ngày qua</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=320&width=600')] opacity-10 bg-cover bg-center"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-600 font-medium">Biểu đồ hiệu suất danh mục</p>
                      <p className="text-sm text-gray-500 mt-2">Đang tải dữ liệu...</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <CardTitle>Tin tức thị trường</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-0">
                    {marketNews.map((news, index) => (
                      <div key={index} className="p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors duration-200 group">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              news.type === "positive" ? "bg-green-500" : news.type === "negative" ? "bg-red-500" : "bg-gray-400"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm group-hover:text-blue-600 transition-colors duration-200">
                              {news.title}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{news.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50">
                    <Button className="w-full bg-transparent hover:bg-white transition-colors duration-300" variant="outline" size="sm">
                      Xem thêm tin tức
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-50 to-indigo-100">
                <CardHeader>
                  <CardTitle className="text-blue-800">Gợi ý từ chuyên gia</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-sm font-semibold text-green-700">Khuyến nghị mua</p>
                      </div>
                      <p className="text-sm text-gray-700">VNM - Vinamilk có triển vọng tốt trong Q4</p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-yellow-500">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <p className="text-sm font-semibold text-yellow-700">Theo dõi</p>
                      </div>
                      <p className="text-sm text-gray-700">HPG - Chờ tín hiệu đột phá kỹ thuật</p>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                    size="sm"
                    asChild
                  >
                    <Link href="/analysis">Xem phân tích chi tiết</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-100">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-800">
                    <Users className="w-5 h-5 mr-2" />
                    Hoạt động cộng đồng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">1,234 thành viên online</span>
                    </div>
                    <p className="text-sm text-gray-700">Thảo luận sôi nổi về #VNM và #FPT trong cộng đồng</p>
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        #VNM
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        #FPT
                      </Badge>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    size="sm"
                    asChild
                  >
                    <Link href="/community">Tham gia thảo luận</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* === HẾT NỘI DUNG === */}
    </div>
  );
}
