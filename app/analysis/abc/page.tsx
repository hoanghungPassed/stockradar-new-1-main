"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Bar, Line, ComposedChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const revenueData = [
  { quarter: "Q1/2023", revenue: 1200, growth: 5.5 },
  { quarter: "Q2/2023", revenue: 1350, growth: 7.2 },
  { quarter: "Q3/2023", revenue: 1480, growth: 9.8 },
  { quarter: "Q4/2023", revenue: 1620, growth: 11.1 },
  { quarter: "Q1/2024", revenue: 1750, growth: 13.4 },
  { quarter: "Q2/2024", revenue: 1890, growth: 15.7 },
  { quarter: "Q3/2024", revenue: 2050, growth: 17.3 },
  { quarter: "Q4/2024", revenue: 2220, growth: 19.5 },
]

const profitData = [
  { quarter: "Q1/2023", profit: 85, growth: 8.2 },
  { quarter: "Q2/2023", profit: 95, growth: 10.5 },
  { quarter: "Q3/2023", profit: 105, growth: 12.8 },
  { quarter: "Q4/2023", profit: 118, growth: 15.2 },
  { quarter: "Q1/2024", profit: 132, growth: 18.9 },
  { quarter: "Q2/2024", profit: 148, growth: 21.1 },
  { quarter: "Q3/2024", profit: 165, growth: 23.4 },
  { quarter: "Q4/2024", profit: 185, growth: 25.0 },
]

export default function ABCDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="border-b bg-gradient-to-r from-card via-card to-card/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-green-600">ABC Financial Analysis</h1>
                  <p className="text-sm text-gray-600">Tổng Công ty Cổ phần Vật tư Nông nghiệp</p>
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
            <TabsList className="grid w-full grid-cols-7 bg-transparent border-0 h-auto p-0">
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
              <div className="py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
                  <Card className="w-full shadow-lg">
                    <CardHeader>
                      <CardTitle>Tăng trưởng doanh thu</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer
                        config={{
                          revenue: { label: "Doanh thu", color: "hsl(var(--chart-1))" },
                          growth: { label: "Tăng trưởng", color: "hsl(var(--chart-2))" },
                        }}
                        className="h-[280px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={revenueData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="quarter" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar yAxisId="left" dataKey="revenue" fill="var(--color-revenue)" />
                            <Line yAxisId="right" type="monotone" dataKey="growth" stroke="var(--color-growth)" />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>

                  <Card className="w-full shadow-lg">
                    <CardHeader>
                      <CardTitle>Tăng trưởng lợi nhuận</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer
                        config={{
                          profit: { label: "Lợi nhuận", color: "hsl(var(--chart-1))" },
                          growth: { label: "Tăng trưởng", color: "hsl(var(--chart-3))" },
                        }}
                        className="h-[280px]"
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={profitData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="quarter" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar yAxisId="left" dataKey="profit" fill="var(--color-profit)" />
                            <Line yAxisId="right" type="monotone" dataKey="growth" stroke="var(--color-growth)" />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="summary">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Báo cáo tài chính tóm tắt</h2>
                <p className="text-muted-foreground">Dữ liệu tài chính chi tiết cho ABC</p>
              </div>
            </TabsContent>

            <TabsContent value="balance">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Bảng cân đối kế toán</h2>
                <p className="text-muted-foreground">Thông tin cân đối kế toán cho ABC</p>
              </div>
            </TabsContent>

            <TabsContent value="income">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Báo cáo kết quả kinh doanh</h2>
                <p className="text-muted-foreground">Kết quả kinh doanh chi tiết cho ABC</p>
              </div>
            </TabsContent>

            <TabsContent value="cashflow">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Báo cáo lưu chuyển tiền tệ</h2>
                <p className="text-muted-foreground">Dòng tiền chi tiết cho ABC</p>
              </div>
            </TabsContent>

            <TabsContent value="indicators">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Chỉ số tài chính</h2>
                <p className="text-muted-foreground">Các chỉ số tài chính quan trọng cho ABC</p>
              </div>
            </TabsContent>

            <TabsContent value="planning">
              <div className="py-6">
                <h2 className="text-2xl font-bold mb-6">Chỉ tiêu kế hoạch</h2>
                <p className="text-muted-foreground">Kế hoạch kinh doanh cho ABC</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
