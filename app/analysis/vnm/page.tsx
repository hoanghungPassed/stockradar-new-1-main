"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Plus, BarChart3, TrendingUp, TrendingDown } from "lucide-react"
import {
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  Area,
  AreaChart,
} from "recharts"

const revenueData = [
  { quarter: "Q4/21", revenue: 15200, growth: 12 },
  { quarter: "Q1/22", revenue: 14800, growth: 8 },
  { quarter: "Q2/22", revenue: 15600, growth: 15 },
  { quarter: "Q3/22", revenue: 16200, growth: 18 },
  { quarter: "Q4/22", revenue: 16800, growth: 22 },
  { quarter: "Q1/23", revenue: 15900, growth: 7 },
  { quarter: "Q2/23", revenue: 16400, growth: 5 },
  { quarter: "Q3/23", revenue: 17100, growth: 12 },
  { quarter: "Q4/23", revenue: 17800, growth: 16 },
  { quarter: "Q1/24", revenue: 16200, growth: 2 },
  { quarter: "Q2/24", revenue: 17200, growth: 5 },
  { quarter: "Q3/24", revenue: 18100, growth: 8 },
  { quarter: "Q4/24", revenue: 18900, growth: 12 },
]

const profitData = [
  { quarter: "Q3/21", profit: 3200, growth: 180 },
  { quarter: "Q4/21", profit: 3800, growth: 220 },
  { quarter: "Q1/22", profit: 3600, growth: 200 },
  { quarter: "Q2/22", profit: 4100, growth: 250 },
  { quarter: "Q3/22", profit: 4300, growth: 280 },
  { quarter: "Q4/22", profit: 4600, growth: 320 },
  { quarter: "Q1/23", profit: 4200, growth: 280 },
  { quarter: "Q2/23", profit: 4400, growth: 290 },
  { quarter: "Q3/23", profit: 4800, growth: 320 },
  { quarter: "Q4/23", profit: 5100, growth: 350 },
  { quarter: "Q1/24", profit: 4500, growth: 300 },
  { quarter: "Q2/24", profit: 4900, growth: 320 },
  { quarter: "Q3/24", profit: 5300, growth: 340 },
  { quarter: "Q4/24", profit: 5600, growth: 380 },
]

const cashflowData = [
  { quarter: "Q3/21", operating: 4200, investing: -1800, financing: -800 },
  { quarter: "Q4/21", operating: 4800, investing: -2100, financing: -900 },
  { quarter: "Q1/22", operating: 4500, investing: -1900, financing: -700 },
  { quarter: "Q2/22", operating: 5100, investing: -2200, financing: -1100 },
  { quarter: "Q3/22", operating: 5400, investing: -2400, financing: -1200 },
  { quarter: "Q4/22", operating: 5800, investing: -2600, financing: -1300 },
  { quarter: "Q1/23", operating: 5200, investing: -2300, financing: -1000 },
  { quarter: "Q2/23", operating: 5600, investing: -2500, financing: -1200 },
  { quarter: "Q3/23", operating: 6000, investing: -2800, financing: -1400 },
  { quarter: "Q4/23", operating: 6400, investing: -3000, financing: -1500 },
  { quarter: "Q1/24", operating: 5800, investing: -2700, financing: -1300 },
  { quarter: "Q2/24", operating: 6200, investing: -2900, financing: -1400 },
  { quarter: "Q3/24", operating: 6600, investing: -3100, financing: -1600 },
  { quarter: "Q4/24", operating: 7000, investing: -3300, financing: -1700 },
]

const efficiencyData = [
  { period: "1/3", roe: 18.2, roa: 12.8, roic: 15.5 },
  { period: "2/3", roe: 19.8, roa: 13.5, roic: 16.2 },
  { period: "3/3", roe: 21.2, roa: 14.1, roic: 17.1 },
  { period: "4/3", roe: 22.5, roa: 14.8, roic: 18.0 },
  { period: "1/4", roe: 20.8, roa: 13.9, roic: 16.8 },
  { period: "2/4", roe: 22.1, roa: 14.6, roic: 17.5 },
  { period: "3/4", roe: 23.5, roa: 15.2, roic: 18.2 },
  { period: "4/4", roe: 24.8, roa: 15.8, roic: 19.1 },
]

const financialSummaryData = [
  {
    period: "Q4/2024",
    revenue: 18900,
    grossProfit: 6800,
    netProfit: 5600,
    eps: 5200,
    pe: 12.5,
    pb: 2.1,
    roe: 24.8,
    roa: 15.8,
    debtToEquity: 0.35,
  },
  {
    period: "Q3/2024",
    revenue: 18100,
    grossProfit: 6400,
    netProfit: 5300,
    eps: 4900,
    pe: 13.2,
    pb: 2.2,
    roe: 23.5,
    roa: 15.2,
    debtToEquity: 0.38,
  },
  {
    period: "Q2/2024",
    revenue: 17200,
    grossProfit: 6100,
    netProfit: 4900,
    eps: 4550,
    pe: 14.1,
    pb: 2.3,
    roe: 22.1,
    roa: 14.6,
    debtToEquity: 0.41,
  },
  {
    period: "Q1/2024",
    revenue: 16200,
    grossProfit: 5700,
    netProfit: 4500,
    eps: 4180,
    pe: 15.2,
    pb: 2.4,
    roe: 20.8,
    roa: 13.9,
    debtToEquity: 0.43,
  },
]

const balanceSheetData = {
  assets: {
    currentAssets: {
      cash: 8500,
      shortTermInvestments: 4200,
      accountsReceivable: 6800,
      inventory: 12500,
      otherCurrentAssets: 2800,
      total: 34800,
    },
    nonCurrentAssets: {
      fixedAssets: 85000,
      longTermInvestments: 15000,
      intangibleAssets: 4500,
      otherNonCurrentAssets: 6200,
      total: 110700,
    },
    totalAssets: 145500,
  },
  liabilities: {
    currentLiabilities: {
      shortTermDebt: 8200,
      accountsPayable: 7500,
      accruedExpenses: 4200,
      otherCurrentLiabilities: 3100,
      total: 23000,
    },
    nonCurrentLiabilities: {
      longTermDebt: 28000,
      deferredTaxLiabilities: 5500,
      otherNonCurrentLiabilities: 3800,
      total: 37300,
    },
    totalLiabilities: 60300,
  },
  equity: {
    shareCapital: 45000,
    retainedEarnings: 35200,
    otherEquity: 5000,
    total: 85200,
  },
}

const incomeStatementData = [
  {
    item: "Doanh thu thuần",
    q4_2024: 18900,
    q3_2024: 18100,
    q2_2024: 17200,
    q1_2024: 16200,
    change: 16.7,
  },
  {
    item: "Giá vốn hàng bán",
    q4_2024: 12100,
    q3_2024: 11700,
    q2_2024: 11100,
    q1_2024: 10500,
    change: 15.2,
  },
  {
    item: "Lợi nhuận gộp",
    q4_2024: 6800,
    q3_2024: 6400,
    q2_2024: 6100,
    q1_2024: 5700,
    change: 19.3,
  },
  {
    item: "Chi phí bán hàng",
    q4_2024: 800,
    q3_2024: 750,
    q2_2024: 720,
    q1_2024: 680,
    change: 17.6,
  },
  {
    item: "Chi phí quản lý",
    q4_2024: 280,
    q3_2024: 260,
    q2_2024: 250,
    q1_2024: 240,
    change: 16.7,
  },
  {
    item: "Lợi nhuận từ HĐKD",
    q4_2024: 5720,
    q3_2024: 5390,
    q2_2024: 5130,
    q1_2024: 4780,
    change: 19.7,
  },
  {
    item: "Thu nhập tài chính",
    q4_2024: 180,
    q3_2024: 170,
    q2_2024: 160,
    q1_2024: 150,
    change: 20.0,
  },
  {
    item: "Chi phí tài chính",
    q4_2024: 220,
    q3_2024: 210,
    q2_2024: 200,
    q1_2024: 190,
    change: 15.8,
  },
  {
    item: "Lợi nhuận trước thuế",
    q4_2024: 5680,
    q3_2024: 5350,
    q2_2024: 5090,
    q1_2024: 4740,
    change: 19.8,
  },
  {
    item: "Thuế TNDN",
    q4_2024: 80,
    q3_2024: 50,
    q2_2024: 90,
    q1_2024: 240,
    change: -66.7,
  },
  {
    item: "Lợi nhuận sau thuế",
    q4_2024: 5600,
    q3_2024: 5300,
    q2_2024: 4900,
    q1_2024: 4500,
    change: 24.4,
  },
]

const financialIndicators = [
  {
    category: "Chỉ số thanh khoản",
    indicators: [
      { name: "Hệ số thanh toán hiện hành", value: 1.51, benchmark: "> 1.2", status: "good" },
      { name: "Hệ số thanh toán nhanh", value: 0.97, benchmark: "> 0.8", status: "good" },
      { name: "Hệ số thanh toán tức thời", value: 0.37, benchmark: "> 0.2", status: "good" },
    ],
  },
  {
    category: "Chỉ số hoạt động",
    indicators: [
      { name: "Vòng quay tổng tài sản", value: 0.52, benchmark: "> 0.4", status: "good" },
      { name: "Vòng quay hàng tồn kho", value: 6.8, benchmark: "> 5", status: "good" },
      { name: "Vòng quay khoản phải thu", value: 10.2, benchmark: "> 8", status: "good" },
    ],
  },
  {
    category: "Chỉ số đòn bẩy",
    indicators: [
      { name: "Hệ số nợ/Tổng tài sản", value: 0.41, benchmark: "< 0.6", status: "good" },
      { name: "Hệ số nợ/Vốn chủ sở hữu", value: 0.71, benchmark: "< 1.5", status: "good" },
      { name: "Hệ số khả năng thanh toán lãi vay", value: 25.8, benchmark: "> 2.5", status: "good" },
    ],
  },
  {
    category: "Chỉ số sinh lời",
    indicators: [
      { name: "ROE - Tỷ suất sinh lời trên VCSH", value: 24.8, benchmark: "> 15%", status: "good" },
      { name: "ROA - Tỷ suất sinh lời trên tài sản", value: 15.8, benchmark: "> 10%", status: "good" },
      { name: "Biên lợi nhuận gộp", value: 36.0, benchmark: "> 20%", status: "good" },
      { name: "Biên lợi nhuận ròng", value: 29.6, benchmark: "> 8%", status: "good" },
    ],
  },
]

function RevenueChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tăng trưởng doanh thu
        </CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
            <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
            <span className="font-medium text-chart-1">Doanh thu</span>
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
              label: "Doanh thu",
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
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Tăng trưởng lợi nhuận
        </CardTitle>
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

function CashFlowChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Dòng tiền
        </CardTitle>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-1/10 border border-chart-1/20">
            <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
            <span className="font-medium text-chart-1">Kinh doanh</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-4/10 border border-chart-4/20">
            <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
            <span className="font-medium text-chart-4">Đầu tư</span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-chart-3/10 border border-chart-3/20">
            <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
            <span className="font-medium text-chart-3">Tài chính</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ChartContainer
          config={{
            operating: {
              label: "Hoạt động kinh doanh",
              color: "hsl(var(--chart-1))",
            },
            investing: {
              label: "Hoạt động đầu tư",
              color: "hsl(var(--chart-4))",
            },
            financing: {
              label: "Hoạt động tài chính",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[280px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cashflowData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
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
              <Bar dataKey="operating" fill="var(--color-operating)" radius={[3, 3, 0, 0]} opacity={0.8} />
              <Bar dataKey="investing" fill="var(--color-investing)" radius={[3, 3, 0, 0]} opacity={0.8} />
              <Bar dataKey="financing" fill="var(--color-financing)" radius={[3, 3, 0, 0]} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function EfficiencyChart() {
  return (
    <Card className="w-full shadow-lg border-border/50 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <CardHeader className="pb-4 space-y-3">
        <CardTitle className="text-lg font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hiệu quả sử dụng vốn
        </CardTitle>
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
            <span className="font-medium text-chart-1">ROIC</span>
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
            roic: {
              label: "ROIC",
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
                dataKey="roic"
                stroke="var(--color-roic)"
                fill="var(--color-roic)"
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
        {financialSummaryData.map((period, index) => (
          <Card
            key={period.period}
            className={`${index === 0 ? "ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5" : ""} shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold text-center">
                {period.period}
                {index === 0 && <Badge className="ml-2 text-xs">Mới nhất</Badge>}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Doanh thu</p>
                  <p className="font-semibold">{period.revenue.toLocaleString()}B</p>
                </div>
                <div>
                  <p className="text-muted-foreground">LNST</p>
                  <p className="font-semibold">{period.netProfit.toLocaleString()}B</p>
                </div>
                <div>
                  <p className="text-muted-foreground">EPS</p>
                  <p className="font-semibold">{period.eps.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">P/E</p>
                  <p className="font-semibold">{period.pe}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ROE</p>
                  <p className="font-semibold">{period.roe}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">ROA</p>
                  <p className="font-semibold">{period.roa}%</p>
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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tài sản
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-3">Tài sản ngắn hạn</h4>
            <div className="space-y-2 pl-4">
              <div className="flex justify-between">
                <span>Tiền và tương đương tiền</span>
                <span className="font-medium">{balanceSheetData.assets.currentAssets.cash.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Đầu tư ngắn hạn</span>
                <span className="font-medium">
                  {balanceSheetData.assets.currentAssets.shortTermInvestments.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Phải thu khách hàng</span>
                <span className="font-medium">
                  {balanceSheetData.assets.currentAssets.accountsReceivable.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Hàng tồn kho</span>
                <span className="font-medium">{balanceSheetData.assets.currentAssets.inventory.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Tài sản ngắn hạn khác</span>
                <span className="font-medium">
                  {balanceSheetData.assets.currentAssets.otherCurrentAssets.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Tổng tài sản ngắn hạn</span>
                <span>{balanceSheetData.assets.currentAssets.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Tài sản dài hạn</h4>
            <div className="space-y-2 pl-4">
              <div className="flex justify-between">
                <span>Tài sản cố định</span>
                <span className="font-medium">
                  {balanceSheetData.assets.nonCurrentAssets.fixedAssets.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Đầu tư dài hạn</span>
                <span className="font-medium">
                  {balanceSheetData.assets.nonCurrentAssets.longTermInvestments.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tài sản vô hình</span>
                <span className="font-medium">
                  {balanceSheetData.assets.nonCurrentAssets.intangibleAssets.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tài sản dài hạn khác</span>
                <span className="font-medium">
                  {balanceSheetData.assets.nonCurrentAssets.otherNonCurrentAssets.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Tổng tài sản dài hạn</span>
                <span>{balanceSheetData.assets.nonCurrentAssets.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold border-t-2 pt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <span>TỔNG TÀI SAN</span>
            <span>{balanceSheetData.assets.totalAssets.toLocaleString()}B</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nguồn vốn
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg mb-3">Nợ ngắn hạn</h4>
            <div className="space-y-2 pl-4">
              <div className="flex justify-between">
                <span>Vay ngắn hạn</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.currentLiabilities.shortTermDebt.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Phải trả người bán</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.currentLiabilities.accountsPayable.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Chi phí phải trả</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.currentLiabilities.accruedExpenses.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Nợ ngắn hạn khác</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.currentLiabilities.otherCurrentLiabilities.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Tổng nợ ngắn hạn</span>
                <span>{balanceSheetData.liabilities.currentLiabilities.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Nợ dài hạn</h4>
            <div className="space-y-2 pl-4">
              <div className="flex justify-between">
                <span>Vay dài hạn</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.nonCurrentLiabilities.longTermDebt.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Thuế thu nhập hoãn lại</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.nonCurrentLiabilities.deferredTaxLiabilities.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between">
                <span>Nợ dài hạn khác</span>
                <span className="font-medium">
                  {balanceSheetData.liabilities.nonCurrentLiabilities.otherNonCurrentLiabilities.toLocaleString()}B
                </span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Tổng nợ dài hạn</span>
                <span>{balanceSheetData.liabilities.nonCurrentLiabilities.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-3">Vốn chủ sở hữu</h4>
            <div className="space-y-2 pl-4">
              <div className="flex justify-between">
                <span>Vốn góp của chủ sở hữu</span>
                <span className="font-medium">{balanceSheetData.equity.shareCapital.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Lợi nhuận chưa phân phối</span>
                <span className="font-medium">{balanceSheetData.equity.retainedEarnings.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Vốn chủ sở hữu khác</span>
                <span className="font-medium">{balanceSheetData.equity.otherEquity.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Tổng vốn chủ sở hữu</span>
                <span>{balanceSheetData.equity.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between text-xl font-bold border-t-2 pt-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <span>TỔNG NGUỒN VỐN</span>
            <span>
              {(balanceSheetData.liabilities.totalLiabilities + balanceSheetData.equity.total).toLocaleString()}B
            </span>
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
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Báo cáo kết quả kinh doanh (Đơn vị: tỷ đồng)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2">
                <th className="text-left py-3 font-semibold">Chỉ tiêu</th>
                <th className="text-right py-3 font-semibold">Q1/2024</th>
                <th className="text-right py-3 font-semibold">Q2/2024</th>
                <th className="text-right py-3 font-semibold">Q3/2024</th>
                <th className="text-right py-3 font-semibold">Q4/2024</th>
                <th className="text-right py-3 font-semibold">Thay đổi (%)</th>
              </tr>
            </thead>
            <tbody>
              {incomeStatementData.map((row, index) => (
                <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                  <td className="py-3 font-medium">{row.item}</td>
                  <td className="text-right py-3">{row.q1_2024.toLocaleString()}</td>
                  <td className="text-right py-3">{row.q2_2024.toLocaleString()}</td>
                  <td className="text-right py-3">{row.q3_2024.toLocaleString()}</td>
                  <td className="text-right py-3 font-semibold">{row.q4_2024.toLocaleString()}</td>
                  <td className="text-right py-3">
                    <div
                      className={`flex items-center justify-end gap-1 ${row.change > 0 ? "text-green-600" : "text-red-600"}`}
                    >
                      {row.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span className="font-semibold">
                        {row.change > 0 ? "+" : ""}
                        {row.change}%
                      </span>
                    </div>
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {financialIndicators.map((category, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {category.category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {category.indicators.map((indicator, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium">{indicator.name}</p>
                    <p className="text-sm text-muted-foreground">Chuẩn: {indicator.benchmark}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">
                      {typeof indicator.value === "number" ? indicator.value.toFixed(2) : indicator.value}
                      {typeof indicator.value === "number" && indicator.name.includes("%") ? "%" : ""}
                    </p>
                    <Badge variant={indicator.status === "good" ? "default" : "destructive"} className="text-xs">
                      {indicator.status === "good" ? "Tốt" : "Cần cải thiện"}
                    </Badge>
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

export default function VNMDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="border-b bg-gradient-to-r from-card via-card to-card/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-green-600">VNM Financial Analysis</h1>
                  <p className="text-sm text-gray-600">Vietnam Dairy Products Dashboard</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-green-50 text-green-600 border-green-200 shadow-sm">
                Live Data
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="charts" className="w-full">
            <TabsList className="grid w-full grid-cols-8 bg-transparent border-0 h-auto p-0">
  <TabsTrigger
    value="overview"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Tổng quan
  </TabsTrigger>

  <TabsTrigger
    value="charts"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Biểu đồ
  </TabsTrigger>

  <TabsTrigger
    value="summary"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    BCTC Tóm tắt
  </TabsTrigger>

  <TabsTrigger
    value="balance"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Cân đối kế toán
  </TabsTrigger>

  <TabsTrigger
    value="income"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Kết quả kinh doanh
  </TabsTrigger>

  <TabsTrigger
    value="cashflow"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Lưu chuyển tiền tệ
  </TabsTrigger>

  <TabsTrigger
    value="indicators"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Chỉ số tài chính
  </TabsTrigger>

  <TabsTrigger
    value="planning"
    className="data-[state=active]:bg-green-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-green-600 py-3 hover:bg-green-50 transition-colors"
  >
    Chỉ tiêu kế hoạch
  </TabsTrigger>
</TabsList>


            <TabsContent value="charts" className="mt-0">
              <div className="py-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent/50 transition-colors shadow-sm bg-transparent"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Trang mặc định
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                <RevenueChart />
                <ProfitChart />
                <CashFlowChart />
                <EfficiencyChart />
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

            <TabsContent value="cashflow" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Báo cáo lưu chuyển tiền tệ</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                  <CashFlowChart />
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Phân tích dòng tiền</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                          <h4 className="font-semibold text-green-800">Dòng tiền từ hoạt động kinh doanh</h4>
                          <p className="text-sm text-green-700 mt-1">
                            Dương và tăng trưởng ổn định, phản ánh hoạt động sản xuất sữa hiệu quả
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                          <h4 className="font-semibold text-blue-800">Dòng tiền từ hoạt động đầu tư</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Âm do đầu tư mở rộng trang trại bò sữa và nhà máy chế biến
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                          <h4 className="font-semibold text-orange-800">Dòng tiền từ hoạt động tài chính</h4>
                          <p className="text-sm text-orange-700 mt-1">
                            Âm do trả nợ và chi trả cổ tức hấp dẫn cho cổ đông
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="indicators" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Chỉ số tài chính</h2>
                <FinancialIndicators />
              </div>
            </TabsContent>

            <TabsContent value="planning" className="mt-0">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Chỉ tiêu kế hoạch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Kế hoạch 2025</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Doanh thu</span>
                          <span className="font-semibold">75,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lợi nhuận sau thuế</span>
                          <span className="font-semibold">22,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROE mục tiêu</span>
                          <span className="font-semibold">26%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tỷ lệ cổ tức</span>
                          <span className="font-semibold">60%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Đầu tư dự kiến</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Mở rộng trang trại</span>
                          <span className="font-semibold">8,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nâng cấp nhà máy</span>
                          <span className="font-semibold">5,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>R&D sản phẩm mới</span>
                          <span className="font-semibold">2,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tổng đầu tư</span>
                          <span className="font-semibold">15,000B</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Mục tiêu ESG</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Giảm phát thải CO2</span>
                          <span className="font-semibold">20%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Trang trại bền vững</span>
                          <span className="font-semibold">85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Bao bì tái chế</span>
                          <span className="font-semibold">90%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Phúc lợi động vật</span>
                          <span className="font-semibold">100%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
