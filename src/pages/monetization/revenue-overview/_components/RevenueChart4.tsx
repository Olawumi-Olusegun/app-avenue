import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { ArrowUp } from "lucide-react"

const chartData = [
    { month: "January", android: 186, ios: 80 },
    { month: "March", android: 237, ios: 120 },
    { month: "May", android: 209, ios: 130 },
    { month: "July", android: 240, ios: 140 },
    { month: "September", android: 218, ios: 180 },
    { month: "November", android: 250, ios: 155 },
    { month: "December", android: 300, ios: 160 },
]

const chartConfig = {
    android: {
        label: "android",
        color: "var(--chart-1)",
    },
    ios: {
        label: "ios",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

const RevenueChart4 = () => {
    return (
        <Card className="h-full w-full bg-primary-500 border-none text-white">
            <CardHeader>
                <CardTitle className="font-normal text-white/70">Paying User Conversion Rate</CardTitle>
                <CardDescription className="text-white/70 flex flex-col gap-4">
                    <span className="font-bold text-2xl flex items-center text-white">
                        3.2%
                        <span className="text-xs text-green-600 flex items-center">
                            <ArrowUp size={15} />
                            100%
                        </span>
                    </span>
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-xs text-white/70 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            2023
                        </span>
                        <span className="text-xs text-white/70 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-orange-500" />
                            2024
                        </span>
                        <span className="text-xs text-white/70 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-yellow-700" />
                            2025
                        </span>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="android"
                            type="monotone"
                            stroke="var(--color-android)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default RevenueChart4