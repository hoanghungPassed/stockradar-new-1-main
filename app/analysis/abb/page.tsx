"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Building2, RefreshCw } from "lucide-react"
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data for ABB - An Binh Commercial Joint Stock Bank
const revenueData = [
  { quarter: "Q1/2023", revenue: 2850, growth: 8.2 },
  { quarter: "Q2/2023", revenue: 3120, growth: 12.5 },
  { quarter: "Q3/2023", revenue: 3380, growth: 15.8 },
  { quarter: "Q4/2023", revenue: 3650, growth: 18.2 },
  { quarter: "Q1/2024", revenue: 3890, growth: 22.1 },
  { quarter: "Q2/2024", revenue: 4150, growth: 24.4 },
  { quarter: "Q3/2024", revenue: 4420, growth: 26.8 },
  { quarter: "Q4/2024", revenue: 4680, growth: 28.2 },
]

const profitData = [
  { quarter: "Q1/2023", profit: 420, growth: 15.2 },
  { quarter: "Q2/2023", profit: 485, growth: 18.5 },
  { quarter: "Q3/2023", profit: 540, growth: 22.8 },
  { quarter: "Q4/2023", profit: 610, growth: 25.2 },
  { quarter: "Q1/2024", profit: 680, growth: 28.5 },
  { quarter: "Q2/2024", profit: 750, growth: 32.1 },
  { quarter: "Q3/2024", profit: 820, growth: 35.4 },
  { quarter: "Q4/2024", profit: 890, growth: 38.2 },
]

const loanData = [
  { quarter: "Q1/2023", retail: 45000, corporate: 38000, sme: 22000 },
  { quarter: "Q2/2023", retail: 47500, corporate: 39500, sme: 23500 },
  { quarter: "Q3/2023", retail: 50000, corporate: 41000, sme: 25000 },
  { quarter: "Q4/2023", retail: 52500, corporate: 42500, sme: 26500 },
  { quarter: "Q1/2024", retail: 55000, corporate: 44000, sme: 28000 },
  { quarter: "Q2/2024", retail: 57500, corporate: 45500, sme: 29500 },
  { quarter: "Q3/2024", retail: 60000, corporate: 47000, sme: 31000 },
  { quarter: "Q4/2024", retail: 62500, corporate: 48500, sme: 32500 },
]

const efficiencyData = [
  { period: "2021", roe: 12.5, roa: 0.85, nim: 3.2 },
  { period: "2022", roe: 14.2, roa: 0.95, nim: 3.5 },
  { period: "2023", roe: 16.8, roa: 1.15, nim: 3.8 },
  { period: "2024", roe: 18.5, roa: 1.28, nim: 4.1 },
]

const stockInfo = {
  symbol: "ABB",
  name: "Ngân hàng TMCP An Bình",
  englishName: "An Binh Commercial Joint Stock Bank",
  price: 12700,
  change: 200,
  changePercent: 1.6,
  volume: 3413300,
  marketCap: 13248.47,
  high52w: 13900,
  low52w: 6700,
  eps: 1430,
  pe: 8.88,
  pb: 0.86,
  bvps: 14808,
  foreignOwnership: 16.5,
}

const financialSummaryData = [
  {
    period: "Q4/2024",
    revenue: 4680,
    netProfit: 890,
    eps: 860,
    pe: 8.88,
    pb: 0.86,
    roe: 18.5,
    roa: 1.28,
    nim: 4.1,
  },
  {
    period: "Q3/2024",
    revenue: 4420,
    netProfit: 820,
    eps: 792,
    pe: 9.2,
    pb: 0.89,
    roe: 17.8,
    roa: 1.22,
    nim: 4.0,
  },
  {
    period: "Q2/2024",
    revenue: 4150,
    netProfit: 750,
    eps: 725,
    pe: 9.5,
    pb: 0.92,
    roe: 16.9,
    roa: 1.18,
    nim: 3.9,
  },
  {
    period: "Q1/2024",
    revenue: 3890,
    netProfit: 680,
    eps: 657,
    pe: 9.8,
    pb: 0.95,
    roe: 16.2,
    roa: 1.12,
    nim: 3.8,
  },
]

const balanceSheetData = {
  assets: {
    currentAssets: {
      cash: 15200,
      loans: 143500,
      securities: 28000,
      otherAssets: 8300,
      total: 195000,
    },
    totalAssets: 195000,
  },
  liabilities: {
    deposits: 165000,
    borrowings: 12000,
    otherLiabilities: 2650,
    total: 179650,
  },
  equity: {
    shareCapital: 10350,
    reserves: 3200,
    retainedEarnings: 1800,
    total: 15350,
  },
}

const incomeStatementData = [
  {
    item: "Thu nhập lãi thuần",
    q4_2024: 3200,
    q3_2024: 3050,
    q2_2024: 2900,
    q1_2024: 2750,
    change: 16.4,
  },
  {
    item: "Thu nhập ngoài lãi",
    q4_2024: 1480,
    q3_2024: 1370,
    q2_2024: 1250,
    q1_2024: 1140,
    change: 29.8,
  },
  {
    item: "Tổng thu nhập hoạt động",
    q4_2024: 4680,
    q3_2024: 4420,
    q2_2024: 4150,
    q1_2024: 3890,
    change: 20.3,
  },
  {
    item: "Chi phí hoạt động",
    q4_2024: 2850,
    q3_2024: 2720,
    q2_2024: 2580,
    q1_2024: 2450,
    change: 16.3,
  },
  {
    item: "Dự phòng rủi ro tín dụng",
    q4_2024: 520,
    q3_2024: 480,
    q2_2024: 450,
    q1_2024: 420,
    change: 23.8,
  },
  {
    item: "Lợi nhuận trước thuế",
    q4_2024: 1310,
    q3_2024: 1220,
    q2_2024: 1120,
    q1_2024: 1020,
    change: 28.4,
  },
  {
    item: "Thuế TNDN",
    q4_2024: 420,
    q3_2024: 400,
    q2_2024: 370,
    q1_2024: 340,
    change: 23.5,
  },
  {
    item: "Lợi nhuận sau thuế",
    q4_2024: 890,
    q3_2024: 820,
    q2_2024: 750,
    q1_2024: 680,
    change: 30.9,
  },
]

const financialIndicators = [
  {
    category: "Chỉ số thanh khoản",
    indicators: [
      { name: "Tỷ lệ cho vay/huy động (LDR)", value: 87.0, benchmark: "< 90%", status: "good" },
      { name: "Tỷ lệ dự phòng rủi ro/Nợ xấu", value: 145.0, benchmark: "> 100%", status: "good" },
      { name: "Tỷ lệ nợ xấu (NPL)", value: 1.8, benchmark: "< 3%", status: "good" },
    ],
  },
  {
    category: "Chỉ số an toàn vốn",
    indicators: [
      { name: "Hệ số an toàn vốn (CAR)", value: 12.5, benchmark: "> 9%", status: "good" },
      { name: "Vốn cấp 1/Tổng tài sản", value: 7.8, benchmark: "> 6%", status: "good" },
      { name: "Đòn bẩy tài chính", value: 12.7, benchmark: "< 15", status: "good" },
    ],
  },
  {
    category: "Chỉ số hiệu quả",
    indicators: [
      { name: "ROE - Tỷ suất sinh lời trên VCSH", value: 18.5, benchmark: "> 12%", status: "good" },
      { name: "ROA - Tỷ suất sinh lời trên tài sản", value: 1.28, benchmark: "> 0.8%", status: "good" },
      { name: "NIM - Biên lãi thuần", value: 4.1, benchmark: "> 3%", status: "good" },
      { name: "CIR - Tỷ lệ chi phí/Thu nhập", value: 60.9, benchmark: "< 65%", status: "good" },
    ],
  },
  {
    category: "Chỉ số tăng trưởng",
    indicators: [
      { name: "Tăng trưởng tín dụng", value: 18.5, benchmark: "> 10%", status: "good" },
      { name: "Tăng trưởng huy động", value: 16.2, benchmark: "> 10%", status: "good" },
      { name: "Tăng trưởng lợi nhuận", value: 30.9, benchmark: "> 15%", status: "good" },
    ],
  },
]

function StockHeader() {
  return (
    <div className="border-b bg-gradient-to-r from-card via-card to-card/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-blue-600">{stockInfo.symbol}</h1>
                  <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200">
                    UPCOM
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{stockInfo.name}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold">{stockInfo.price.toLocaleString()}</span>
                <div className={`flex items-center gap-1 ${stockInfo.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {stockInfo.change >= 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
                  <span className="font-semibold">
                    {stockInfo.change >= 0 ? "+" : ""}
                    {stockInfo.change.toLocaleString()} ({stockInfo.changePercent >= 0 ? "+" : ""}
                    {stockInfo.changePercent}%)
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">VNĐ</p>
            </div>

            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <RefreshCw className="w-4 h-4" />
              Làm mới
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mt-4 pt-4 border-t">
          <div>
            <p className="text-xs text-muted-foreground">Vốn hóa</p>
            <p className="font-semibold">{stockInfo.marketCap.toLocaleString()}B</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">KL GD</p>
            <p className="font-semibold">{(stockInfo.volume / 1000000).toFixed(2)}M</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cao 52T</p>
            <p className="font-semibold text-green-600">{stockInfo.high52w.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Thấp 52T</p>
            <p className="font-semibold text-red-600">{stockInfo.low52w.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">EPS</p>
            <p className="font-semibold">{stockInfo.eps.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">P/E</p>
            <p className="font-semibold">{stockInfo.pe}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">P/B</p>
            <p className="font-semibold">{stockInfo.pb}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">% NN sở hữu</p>
            <p className="font-semibold">{stockInfo.foreignOwnership}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function RevenueChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance">Tăng trưởng thu nhập</CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
            <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
            <span className="font-medium text-chart-1">Thu nhập</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-2/10 border border-chart-2/20">
            <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
            <span className="font-medium text-chart-2">Tăng trưởng</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer
          config={{
            revenue: {
              label: "Thu nhập",
              color: "hsl(var(--chart-1))",
            },
            growth: {
              label: "Tăng trưởng",
              color: "hsl(var(--chart-2))",
            },
          }}
          className="h-[280px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="quarter"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                dy={5}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value / 1000}K`}
                width={45}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value}%`}
                width={45}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar yAxisId="left" dataKey="revenue" fill="var(--color-revenue)" radius={[3, 3, 0, 0]} opacity={0.8} />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growth"
                stroke="var(--color-growth)"
                strokeWidth={2}
                dot={{ fill: "var(--color-growth)", strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function ProfitChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance">Tăng trưởng lợi nhuận</CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
            <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
            <span className="font-medium text-chart-1">Lợi nhuận</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-3/10 border border-chart-3/20">
            <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
            <span className="font-medium text-chart-3">Tăng trưởng</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer
          config={{
            profit: {
              label: "Lợi nhuận",
              color: "hsl(var(--chart-1))",
            },
            growth: {
              label: "Tăng trưởng",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[280px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={profitData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="quarter"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                dy={5}
              />
              <YAxis
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value}`}
                width={45}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value}%`}
                width={45}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar yAxisId="left" dataKey="profit" fill="var(--color-profit)" radius={[3, 3, 0, 0]} opacity={0.8} />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growth"
                stroke="var(--color-growth)"
                strokeWidth={2}
                dot={{ fill: "var(--color-growth)", strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function LoanPortfolioChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance">Danh mục cho vay</CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
            <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
            <span className="font-medium text-chart-1">Bán lẻ</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-4/10 border border-chart-4/20">
            <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
            <span className="font-medium text-chart-4">Doanh nghiệp</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-3/10 border border-chart-3/20">
            <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
            <span className="font-medium text-chart-3">SME</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer
          config={{
            retail: {
              label: "Bán lẻ",
              color: "hsl(var(--chart-1))",
            },
            corporate: {
              label: "Doanh nghiệp",
              color: "hsl(var(--chart-4))",
            },
            sme: {
              label: "SME",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[280px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={loanData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="quarter"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                dy={5}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value / 1000}K`}
                width={45}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="retail" fill="var(--color-retail)" radius={[3, 3, 0, 0]} opacity={0.8} />
              <Bar dataKey="corporate" fill="var(--color-corporate)" radius={[3, 3, 0, 0]} opacity={0.8} />
              <Bar dataKey="sme" fill="var(--color-sme)" radius={[3, 3, 0, 0]} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function EfficiencyChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance">Hiệu quả hoạt động</CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-4/10 border border-chart-4/20">
            <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
            <span className="font-medium text-chart-4">ROE</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-2/10 border border-chart-2/20">
            <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
            <span className="font-medium text-chart-2">ROA</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
            <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
            <span className="font-medium text-chart-1">NIM</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer
          config={{
            roe: {
              label: "ROE",
              color: "hsl(var(--chart-4))",
            },
            roa: {
              label: "ROA",
              color: "hsl(var(--chart-2))",
            },
            nim: {
              label: "NIM",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[280px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={efficiencyData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis
                dataKey="period"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))", fontWeight: 500 }}
                dy={5}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(value) => `${value}%`}
                width={45}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="roe"
                stroke="var(--color-roe)"
                fill="var(--color-roe)"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="roa"
                stroke="var(--color-roa)"
                fill="var(--color-roa)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="nim"
                stroke="var(--color-nim)"
                fill="var(--color-nim)"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function FinancialSummary() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {financialSummaryData.map((data, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">{data.period}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Thu nhập</span>
                  <span className="font-semibold">{data.revenue.toLocaleString()}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lợi nhuận</span>
                  <span className="font-semibold">{data.netProfit.toLocaleString()}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>EPS</span>
                  <span className="font-semibold">{data.eps.toLocaleString()}</span>
                </div>
              </div>
              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>P/E</span>
                  <span className="font-semibold">{data.pe}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>P/B</span>
                  <span className="font-semibold">{data.pb}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ROE</span>
                  <span className="font-semibold">{data.roe}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>ROA</span>
                  <span className="font-semibold">{data.roa}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>NIM</span>
                  <span className="font-semibold">{data.nim}%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function BalanceSheet() {
  const { assets, liabilities, equity } = balanceSheetData

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Tài sản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Tiền và tương đương</span>
              <span>{assets.currentAssets.cash.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Cho vay khách hàng</span>
              <span>{assets.currentAssets.loans.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Chứng khoán đầu tư</span>
              <span>{assets.currentAssets.securities.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Tài sản khác</span>
              <span>{assets.currentAssets.otherAssets.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Tổng tài sản</span>
              <span>{assets.totalAssets.toLocaleString()}B</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Nợ phải trả</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Tiền gửi khách hàng</span>
              <span>{liabilities.deposits.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Vay và nợ</span>
              <span>{liabilities.borrowings.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Nợ khác</span>
              <span>{liabilities.otherLiabilities.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Tổng nợ phải trả</span>
              <span>{liabilities.total.toLocaleString()}B</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Vốn chủ sở hữu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Vốn điều lệ</span>
              <span>{equity.shareCapital.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Quỹ dự trữ</span>
              <span>{equity.reserves.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Lợi nhuận giữ lại</span>
              <span>{equity.retainedEarnings.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
              <span>Tổng vốn chủ sở hữu</span>
              <span>{equity.total.toLocaleString()}B</span>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Phân tích cơ cấu</h4>
            <div className="space-y-1 text-sm text-blue-700">
              <div className="flex justify-between">
                <span>Tỷ lệ nợ/Tổng tài sản</span>
                <span>{((liabilities.total / assets.totalAssets) * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Tỷ lệ vốn chủ sở hữu</span>
                <span>{((equity.total / assets.totalAssets) * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Đòn bẩy tài chính</span>
                <span>{(assets.totalAssets / equity.total).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function IncomeStatement() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Báo cáo kết quả kinh doanh</CardTitle>
        <CardDescription>Đơn vị: Tỷ đồng</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Chỉ tiêu</th>
                <th className="text-right py-2">Q4/2024</th>
                <th className="text-right py-2">Q3/2024</th>
                <th className="text-right py-2">Q2/2024</th>
                <th className="text-right py-2">Q1/2024</th>
                <th className="text-right py-2">Thay đổi (%)</th>
              </tr>
            </thead>
            <tbody>
              {incomeStatementData.map((item, index) => (
                <tr key={index} className="border-b hover:bg-muted/50">
                  <td className="py-2 font-medium">{item.item}</td>
                  <td className="text-right py-2">{item.q4_2024.toLocaleString()}</td>
                  <td className="text-right py-2">{item.q3_2024.toLocaleString()}</td>
                  <td className="text-right py-2">{item.q2_2024.toLocaleString()}</td>
                  <td className="text-right py-2">{item.q1_2024.toLocaleString()}</td>
                  <td
                    className={`text-right py-2 font-semibold ${item.change > 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {item.change > 0 ? "+" : ""}
                    {item.change.toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}

function FinancialIndicators() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {financialIndicators.map((category, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">{category.category}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.indicators.map((indicator, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{indicator.name}</div>
                    <div className="text-xs text-muted-foreground">Chuẩn: {indicator.benchmark}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{indicator.value}%</span>
                    <div
                      className={`w-2 h-2 rounded-full ${indicator.status === "good" ? "bg-green-500" : "bg-red-500"}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function ABBDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <StockHeader />

      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="charts" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-transparent border-0 h-auto p-0">
              <TabsTrigger
                value="charts"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                Biểu đồ
              </TabsTrigger>
              <TabsTrigger
                value="summary"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                BCTC Tóm tắt
              </TabsTrigger>
              <TabsTrigger
                value="balance"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                Cân đối kế toán
              </TabsTrigger>
              <TabsTrigger
                value="income"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                Kết quả kinh doanh
              </TabsTrigger>
              <TabsTrigger
                value="indicators"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                Chỉ số tài chính
              </TabsTrigger>
            </TabsList>

            <TabsContent value="charts" className="mt-0">
              <div className="py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                  <RevenueChart />
                  <ProfitChart />
                  <LoanPortfolioChart />
                  <EfficiencyChart />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="summary" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Báo cáo tài chính tóm tắt</h2>
                <FinancialSummary />
              </div>
            </TabsContent>

            <TabsContent value="balance" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Bảng cân đối kế toán</h2>
                <BalanceSheet />
              </div>
            </TabsContent>

            <TabsContent value="income" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Báo cáo kết quả kinh doanh</h2>
                <IncomeStatement />
              </div>
            </TabsContent>

            <TabsContent value="indicators" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Chỉ số tài chính</h2>
                <FinancialIndicators />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
