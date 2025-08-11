import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

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

const PayoutChart = () => {
    return (
        <Card className="h-full w-full bg-primary-500 border-none text-white py-2 gap-0">
            <CardHeader>
                <CardTitle></CardTitle>
                <CardDescription className="text-white/70 flex flex-col gap-x-4">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-xs text-white/70 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-yellow-500" />
                            Income
                        </span>
                        <span className="text-xs text-white/70 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-orange-500" />
                            Outcome
                        </span>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="h-[200px] w-full p-0 pr-3">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{ top: 20, left: 12, right: 12 }}
                        style={{ color: "white" }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis ticks={[0, 400, 600, 800, 1000]} color="var(-chart-axis-color)" />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="android"
                            type="monotone"
                            stroke="var(--color-android)"
                            strokeWidth={2}
                            dot={false}

                        />
                        <Line
                            dataKey="ios"
                            type="monotone"
                            stroke="var(--color-ios)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default PayoutChart