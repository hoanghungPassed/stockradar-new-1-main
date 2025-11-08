"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Plus } from "lucide-react"
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

const revenueData = [
  { quarter: "Q1/2023", revenue: 8200, growth: 12.5 },
  { quarter: "Q2/2023", revenue: 8800, growth: 15.2 },
  { quarter: "Q3/2023", revenue: 9100, growth: 18.8 },
  { quarter: "Q4/2023", revenue: 9800, growth: 22.1 },
  { quarter: "Q1/2024", revenue: 10200, growth: 24.4 },
  { quarter: "Q2/2024", revenue: 10800, growth: 22.7 },
  { quarter: "Q3/2024", revenue: 11400, growth: 25.3 },
  { quarter: "Q4/2024", revenue: 12100, growth: 23.5 },
]

const profitData = [
  { quarter: "Q1/2023", profit: 980, growth: 18.2 },
  { quarter: "Q2/2023", profit: 1120, growth: 22.5 },
  { quarter: "Q3/2023", profit: 1180, growth: 25.8 },
  { quarter: "Q4/2023", profit: 1350, growth: 28.2 },
  { quarter: "Q1/2024", profit: 1420, growth: 44.9 },
  { quarter: "Q2/2024", profit: 1580, growth: 41.1 },
  { quarter: "Q3/2024", profit: 1680, growth: 42.4 },
  { quarter: "Q4/2024", profit: 1850, growth: 37.0 },
]

const cashflowData = [
  { quarter: "Q1/2023", operating: 1200, investing: -800, financing: -200 },
  { quarter: "Q2/2023", operating: 1350, investing: -900, financing: -180 },
  { quarter: "Q3/2023", operating: 1420, investing: -1100, financing: -150 },
  { quarter: "Q4/2023", operating: 1580, investing: -1200, financing: -220 },
  { quarter: "Q1/2024", operating: 1650, investing: -1400, financing: -180 },
  { quarter: "Q2/2024", operating: 1780, investing: -1500, financing: -200 },
  { quarter: "Q3/2024", operating: 1920, investing: -1600, financing: -250 },
  { quarter: "Q4/2024", operating: 2100, investing: -1800, financing: -280 },
]

const efficiencyData = [
  { period: "2021", roe: 18.5, roa: 12.8, roic: 15.2 },
  { period: "2022", roe: 20.2, roa: 14.1, roic: 16.8 },
  { period: "2023", roe: 22.8, roa: 15.9, roic: 18.5 },
  { period: "2024", roe: 25.1, roa: 17.2, roic: 20.1 },
]

const financialSummaryData = [
  {
    period: "Q4/2024",
    revenue: 12100,
    grossProfit: 4200,
    netProfit: 1850,
    eps: 1720,
    pe: 18.5,
    pb: 3.2,
    roe: 25.1,
    roa: 17.2,
    debtToEquity: 0.28,
  },
  {
    period: "Q3/2024",
    revenue: 11400,
    grossProfit: 3900,
    netProfit: 1680,
    eps: 1560,
    pe: 19.2,
    pb: 3.4,
    roe: 24.2,
    roa: 16.8,
    debtToEquity: 0.31,
  },
  {
    period: "Q2/2024",
    revenue: 10800,
    grossProfit: 3650,
    netProfit: 1580,
    eps: 1470,
    pe: 20.1,
    pb: 3.5,
    roe: 23.1,
    roa: 16.2,
    debtToEquity: 0.33,
  },
  {
    period: "Q1/2024",
    revenue: 10200,
    grossProfit: 3400,
    netProfit: 1420,
    eps: 1320,
    pe: 21.5,
    pb: 3.7,
    roe: 22.0,
    roa: 15.5,
    debtToEquity: 0.35,
  },
]

const balanceSheetData = {
  assets: {
    currentAssets: {
      cash: 5200,
      shortTermInvestments: 2800,
      accountsReceivable: 4500,
      inventory: 1200,
      otherCurrentAssets: 1800,
      total: 15500,
    },
    nonCurrentAssets: {
      fixedAssets: 28000,
      longTermInvestments: 8500,
      intangibleAssets: 12000,
      otherNonCurrentAssets: 3200,
      total: 51700,
    },
    totalAssets: 67200,
  },
  liabilities: {
    currentLiabilities: {
      shortTermDebt: 3200,
      accountsPayable: 2800,
      accruedExpenses: 1900,
      otherCurrentLiabilities: 1500,
      total: 9400,
    },
    nonCurrentLiabilities: {
      longTermDebt: 8500,
      deferredTaxLiabilities: 2200,
      otherNonCurrentLiabilities: 1800,
      total: 12500,
    },
    totalLiabilities: 21900,
  },
  equity: {
    shareCapital: 28000,
    retainedEarnings: 15800,
    otherEquity: 1500,
    total: 45300,
  },
}

const incomeStatementData = [
  {
    item: "Doanh thu thuần",
    q4_2024: 12100,
    q3_2024: 11400,
    q2_2024: 10800,
    q1_2024: 10200,
    change: 18.6,
  },
  {
    item: "Giá vốn hàng bán",
    q4_2024: 7900,
    q3_2024: 7500,
    q2_2024: 7150,
    q1_2024: 6800,
    change: 16.2,
  },
  {
    item: "Lợi nhuận gộp",
    q4_2024: 4200,
    q3_2024: 3900,
    q2_2024: 3650,
    q1_2024: 3400,
    change: 23.5,
  },
  {
    item: "Chi phí bán hàng",
    q4_2024: 1200,
    q3_2024: 1100,
    q2_2024: 1050,
    q1_2024: 980,
    change: 22.4,
  },
  {
    item: "Chi phí quản lý",
    q4_2024: 850,
    q3_2024: 800,
    q2_2024: 750,
    q1_2024: 720,
    change: 18.1,
  },
  {
    item: "Lợi nhuận từ HĐKD",
    q4_2024: 2150,
    q3_2024: 2000,
    q2_2024: 1850,
    q1_2024: 1700,
    change: 26.5,
  },
  {
    item: "Thu nhập tài chính",
    q4_2024: 120,
    q3_2024: 110,
    q2_2024: 100,
    q1_2024: 90,
    change: 33.3,
  },
  {
    item: "Chi phí tài chính",
    q4_2024: 180,
    q3_2024: 170,
    q2_2024: 160,
    q1_2024: 150,
    change: 20.0,
  },
  {
    item: "Lợi nhuận trước thuế",
    q4_2024: 2090,
    q3_2024: 1940,
    q2_2024: 1790,
    q1_2024: 1640,
    change: 27.4,
  },
  {
    item: "Thuế TNDN",
    q4_2024: 240,
    q3_2024: 260,
    q2_2024: 210,
    q1_2024: 220,
    change: 9.1,
  },
  {
    item: "Lợi nhuận sau thuế",
    q4_2024: 1850,
    q3_2024: 1680,
    q2_2024: 1580,
    q1_2024: 1420,
    change: 30.3,
  },
]

const financialIndicators = [
  {
    category: "Chỉ số thanh khoản",
    indicators: [
      { name: "Hệ số thanh toán hiện hành", value: 1.65, benchmark: "> 1.2", status: "good" },
      { name: "Hệ số thanh toán nhanh", value: 1.52, benchmark: "> 0.8", status: "good" },
      { name: "Hệ số thanh toán tức thời", value: 0.55, benchmark: "> 0.2", status: "good" },
    ],
  },
  {
    category: "Chỉ số hoạt động",
    indicators: [
      { name: "Vòng quay tổng tài sản", value: 0.72, benchmark: "> 0.4", status: "good" },
      { name: "Vòng quay hàng tồn kho", value: 42.5, benchmark: "> 5", status: "good" },
      { name: "Vòng quay khoản phải thu", value: 8.9, benchmark: "> 8", status: "good" },
    ],
  },
  {
    category: "Chỉ số đòn bẩy",
    indicators: [
      { name: "Hệ số nợ/Tổng tài sản", value: 0.33, benchmark: "< 0.6", status: "good" },
      { name: "Hệ số nợ/Vốn chủ sở hữu", value: 0.48, benchmark: "< 1.5", status: "good" },
      { name: "Hệ số khả năng thanh toán lãi vay", value: 11.6, benchmark: "> 2.5", status: "good" },
    ],
  },
  {
    category: "Chỉ số sinh lời",
    indicators: [
      { name: "ROE - Tỷ suất sinh lời trên VCSH", value: 25.1, benchmark: "> 15%", status: "good" },
      { name: "ROA - Tỷ suất sinh lời trên tài sản", value: 17.2, benchmark: "> 10%", status: "good" },
      { name: "Biên lợi nhuận gộp", value: 34.7, benchmark: "> 20%", status: "good" },
      { name: "Biên lợi nhuận ròng", value: 15.3, benchmark: "> 8%", status: "good" },
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
        {financialSummaryData.map((data, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">{data.period}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Doanh thu</span>
                  <span className="font-semibold">{data.revenue.toLocaleString()}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lợi nhuận gộp</span>
                  <span className="font-semibold">{data.grossProfit.toLocaleString()}B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Lợi nhuận ròng</span>
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
          <div>
            <h4 className="font-semibold mb-2">Tài sản ngắn hạn</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Tiền và tương đương</span>
                <span>{assets.currentAssets.cash.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Đầu tư ngắn hạn</span>
                <span>{assets.currentAssets.shortTermInvestments.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Phải thu khách hàng</span>
                <span>{assets.currentAssets.accountsReceivable.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Hàng tồn kho</span>
                <span>{assets.currentAssets.inventory.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Tài sản ngắn hạn khác</span>
                <span>{assets.currentAssets.otherCurrentAssets.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Tổng TSNH</span>
                <span>{assets.currentAssets.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Tài sản dài hạn</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Tài sản cố định</span>
                <span>{assets.nonCurrentAssets.fixedAssets.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Đầu tư dài hạn</span>
                <span>{assets.nonCurrentAssets.longTermInvestments.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Tài sản vô hình</span>
                <span>{assets.nonCurrentAssets.intangibleAssets.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Tài sản dài hạn khác</span>
                <span>{assets.nonCurrentAssets.otherNonCurrentAssets.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Tổng TSDH</span>
                <span>{assets.nonCurrentAssets.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Tổng tài sản</span>
            <span>{assets.totalAssets.toLocaleString()}B</span>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Nợ phải trả</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Nợ ngắn hạn</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Vay ngắn hạn</span>
                <span>{liabilities.currentLiabilities.shortTermDebt.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Phải trả người bán</span>
                <span>{liabilities.currentLiabilities.accountsPayable.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Chi phí phải trả</span>
                <span>{liabilities.currentLiabilities.accruedExpenses.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Nợ ngắn hạn khác</span>
                <span>{liabilities.currentLiabilities.otherCurrentLiabilities.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Tổng nợ NH</span>
                <span>{liabilities.currentLiabilities.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Nợ dài hạn</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Vay dài hạn</span>
                <span>{liabilities.nonCurrentLiabilities.longTermDebt.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Thuế hoãn lại</span>
                <span>{liabilities.nonCurrentLiabilities.deferredTaxLiabilities.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between">
                <span>Nợ dài hạn khác</span>
                <span>{liabilities.nonCurrentLiabilities.otherNonCurrentLiabilities.toLocaleString()}B</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-1">
                <span>Tổng nợ DH</span>
                <span>{liabilities.nonCurrentLiabilities.total.toLocaleString()}B</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-2">
            <span>Tổng nợ phải trả</span>
            <span>{liabilities.totalLiabilities.toLocaleString()}B</span>
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
              <span>Vốn góp của chủ sở hữu</span>
              <span>{equity.shareCapital.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Lợi nhuận sau thuế chưa phân phối</span>
              <span>{equity.retainedEarnings.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between">
              <span>Vốn khác của chủ sở hữu</span>
              <span>{equity.otherEquity.toLocaleString()}B</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t pt-2">
              <span>Tổng vốn chủ sở hữu</span>
              <span>{equity.total.toLocaleString()}B</span>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">Phân tích cơ cấu vốn</h4>
            <div className="space-y-1 text-sm text-blue-700">
              <div className="flex justify-between">
                <span>Tỷ lệ nợ/Tổng tài sản</span>
                <span>32.6%</span>
              </div>
              <div className="flex justify-between">
                <span>Tỷ lệ vốn chủ sở hữu</span>
                <span>67.4%</span>
              </div>
              <div className="flex justify-between">
                <span>Hệ số nợ/Vốn CSH</span>
                <span>0.48</span>
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

export default function FPTDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="border-b bg-gradient-to-r from-card via-card to-card/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-blue-600">FPT Financial Analysis</h1>
                  <p className="text-sm text-gray-600">Technology Corporation Dashboard</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-50 text-blue-600 border-blue-200 shadow-sm">
                Live Data
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="charts" className="w-full">
            <TabsList className="grid w-full grid-cols-7 bg-transparent border-0 h-auto p-0">
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
                value="cashflow"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                Lưu chuyển tiền tệ
              </TabsTrigger>
              <TabsTrigger
                value="indicators"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
              >
                Chỉ số tài chính
              </TabsTrigger>
              <TabsTrigger
                value="planning"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 py-3 hover:bg-blue-50 transition-colors"
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
                        <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                          <h4 className="font-semibold text-blue-800">Dòng tiền từ hoạt động kinh doanh</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            Dương và tăng trưởng mạnh, phản ánh hoạt động IT services và phần mềm hiệu quả
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-orange-50 border border-orange-200">
                          <h4 className="font-semibold text-orange-800">Dòng tiền từ hoạt động đầu tư</h4>
                          <p className="text-sm text-orange-700 mt-1">
                            Âm do đầu tư mạnh vào R&D, hạ tầng công nghệ và mở rộng thị trường
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                          <h4 className="font-semibold text-green-800">Dòng tiền từ hoạt động tài chính</h4>
                          <p className="text-sm text-green-700 mt-1">
                            Âm do trả nợ và chi trả cổ tức ổn định cho cổ đông
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
                          <span className="font-semibold">50,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Lợi nhuận sau thuế</span>
                          <span className="font-semibold">8,500B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>ROE mục tiêu</span>
                          <span className="font-semibold">27%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tỷ lệ cổ tức</span>
                          <span className="font-semibold">40%</span>
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
                          <span>R&D và AI</span>
                          <span className="font-semibold">5,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Hạ tầng IT</span>
                          <span className="font-semibold">3,500B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mở rộng quốc tế</span>
                          <span className="font-semibold">2,000B</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tổng đầu tư</span>
                          <span className="font-semibold">10,500B</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle>Mục tiêu Digital</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>AI Solutions</span>
                          <span className="font-semibold">30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Cloud Services</span>
                          <span className="font-semibold">45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Digital Transformation</span>
                          <span className="font-semibold">25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Green IT</span>
                          <span className="font-semibold">85%</span>
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
