"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BarChart3, Search, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { signOut } from "firebase/auth";
import Image from "next/image";


// ✅ Sử dụng auth đã khởi tạo sẵn trong firebase.ts
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";


type Stock = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  sector: string;
  risk: string;
  volume?: string;
  trend?: string;
  marketCap?: string;
  analysis?: string;
  rating?: number;
  targetPrice?: string;
};

export default function StocksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"free" | "premium">("free");
  const [isPremium, setIsPremium] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
const [userPhoto, setUserPhoto] = useState<string | null>(null);



  // ✅ Kiểm tra tài khoản đăng nhập
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



  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const freeStocks: Stock[] = [
    { symbol: "VNM", name: "Vinamilk", price: "61,800", change: "+?%", sector: "Thực phẩm", risk: "Thấp", volume: "2.1M", trend: "up", marketCap: "₫234T" },
    { symbol: "FPT", name: "FPT Corporation", price: "142,000", change: "+1.8%", sector: "Công nghệ", risk: "Trung bình", volume: "1.8M", trend: "up", marketCap: "₫156T" },
    { symbol: "VCB", name: "Vietcombank", price: "98,200", change: "+0.9%", sector: "Ngân hàng", risk: "Thấp", volume: "3.2M", trend: "up", marketCap: "₫445T" },
    { symbol: "HPG", name: "Hòa Phát Group", price: "28,100", change: "+3.2%", sector: "Thép", risk: "Trung bình", volume: "5.1M", trend: "up", marketCap: "₫89T" },
    { symbol: "ABC", name: "Công ty CP Truyền thông VMG", price: "15,800", change: "+1.3%", sector: "Truyền thông", risk: "Trung bình", volume: "0.5M", trend: "up", marketCap: "₫1.2T" },
    { symbol: "ABB", name: "Ngân hàng TMCP An Bình (ABBank)", price: "11,200", change: "+0.9%", sector: "Ngân hàng", risk: "Thấp", volume: "3.8M", trend: "up", marketCap: "₫5.3T" },
    { symbol: "ABI", name: "CTCP Bảo hiểm Ngân hàng Nông nghiệp (ABIC)", price: "22,500", change: "+2.1%", sector: "Bảo hiểm", risk: "Thấp", volume: "0.7M", trend: "up", marketCap: "₫2.8T" },
    { symbol: "MWG", name: "CTCP Đầu tư Thế Giới Di Động", price: "64,300", change: "+1.5%", sector: "Bán lẻ", risk: "Trung bình", volume: "4.2M", trend: "up", marketCap: "₫94T" },
    { symbol: "GAS", name: "PV Gas", price: "95,000", change: "+0.7%", sector: "Năng lượng", risk: "Thấp", volume: "1.9M", trend: "up", marketCap: "₫181T" },
    { symbol: "VIC", name: "Vingroup", price: "48,200", change: "+2.2%", sector: "Đa ngành", risk: "Cao", volume: "3.1M", trend: "up", marketCap: "₫187T" },
    { symbol: "SSI", name: "CTCP Chứng khoán SSI", price: "31,900", change: "+?%", sector: "Chứng khoán", risk: "Trung bình", volume: "6.8M", trend: "up", marketCap: "₫54T" },
    { symbol: "VRE", name: "Vincom Retail", price: "26,900", change: "+1.1%", sector: "Bất động sản", risk: "Trung bình", volume: "2.5M", trend: "up", marketCap: "₫61T" },
    { symbol: "PNJ", name: "CTCP Vàng bạc Đá quý Phú Nhuận", price: "122,500", change: "+3.0%", sector: "Bán lẻ", risk: "Trung bình", volume: "1.2M", trend: "up", marketCap: "₫35T" },
    { symbol: "STB", name: "Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank)", price: "30,200", change: "+2.8%", sector: "Ngân hàng", risk: "Thấp", volume: "8.4M", trend: "up", marketCap: "₫58T" },
    { symbol: "VJC", name: "CTCP Hàng không Vietjet", price: "97,800", change: "+1.2%", sector: "Hàng không", risk: "Trung bình", volume: "1.1M", trend: "up", marketCap: "₫53T" },
  ];

  const premiumStocks: Stock[] = [
    { symbol: "MSN", name: "Masan Group", price: "156,000", change: "+4.1%", sector: "Tiêu dùng", risk: "Cao", analysis: "Mục tiêu 180,000", rating: 4.5, targetPrice: "180,000" },
    { symbol: "VHM", name: "Vinhomes", price: "78,500", change: "+2.8%", sector: "Bất động sản", risk: "Cao", analysis: "Khuyến nghị mua", rating: 4.2, targetPrice: "85,000" },
    { symbol: "TCB", name: "Techcombank", price: "52,400", change: "+1.5%", sector: "Ngân hàng", risk: "Trung bình", analysis: "Nắm giữ dài hạn", rating: 4.0, targetPrice: "58,000" },
  ];

  const stocks = activeTab === "free" ? freeStocks : premiumStocks;

  const filteredStocks = stocks.filter((stock) => {
    const matchSearch =
      stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      stock.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchSector = selectedSector === "all" || stock.sector === selectedSector;
    return matchSearch && matchSector;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      

      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Page Header */}
          <div
            className={`flex justify-between items-center transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Danh sách cổ phiếu 📈
              </h1>
              <p className="text-gray-600 text-lg mt-2">
                Khám phá và phân tích các cơ hội đầu tư
              </p>
            </div>

            {/* 🔒 Ẩn nút nâng cấp nếu là tài khoản premium */}
            {!isPremium && (
              <Button
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href="/stocks/premium">
                  <Lock className="w-4 h-4 mr-2" />
                  Nâng cấp Premium
                </Link>
              </Button>
            )}
          </div>

          {/* Tabs */}
          <div className="flex gap-4">
            <Button
              variant={activeTab === "free" ? "default" : "outline"}
              onClick={() => setActiveTab("free")}
            >
              Free
            </Button>
            <Button
              variant={activeTab === "premium" ? "default" : "outline"}
              onClick={() => setActiveTab("premium")}
            >
              Premium
            </Button>
          </div>

          {/* Search and Filter */}
          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex gap-4 items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Tìm kiếm theo mã hoặc tên công ty..."
                    className="pl-10 bg-white/50 backdrop-blur-sm border-gray-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <select
                  className="px-3 py-2 border rounded-lg bg-white/70 backdrop-blur-sm border-gray-200 text-sm"
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                >
                  <option value="all">Tất cả ngành</option>
                  <option value="Ngân hàng">Ngân hàng</option>
                  <option value="Công nghệ">Công nghệ</option>
                  <option value="Thực phẩm">Thực phẩm</option>
                  <option value="Thép">Thép</option>
                  <option value="Bất động sản">Bất động sản</option>
                  <option value="Tiêu dùng">Tiêu dùng</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Stock List */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeTab === "premium" && !isPremium ? (
              <p className="text-center text-gray-500 col-span-full italic">
                🔒 Bạn cần nâng cấp Premium để xem danh sách cổ phiếu nâng cao.
              </p>
            ) : (
              filteredStocks.map((stock) => (
                <Card key={stock.symbol} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-semibold">{stock.symbol}</h2>
                      <span className="text-sm text-gray-500">{stock.sector}</span>
                    </div>
                    <p className="text-gray-700">{stock.name}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="font-bold text-gray-900">{stock.price} ₫</span>
                      <span className="text-green-600">{stock.change}</span>
                    </div>

                    {activeTab === "premium" && stock.analysis && (
                      <p className="text-sm text-purple-600 mt-1">
                        🎯 {stock.analysis} (Target {stock.targetPrice})
                      </p>
                    )}

                    <Button asChild variant="outline" className="w-full mt-3">
                      <Link href={`/analysis/${stock.symbol.toLowerCase()}`}>
                        Xem báo cáo đầy đủ
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
