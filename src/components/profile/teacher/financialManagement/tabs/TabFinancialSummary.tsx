import { DollarSign, TrendingUp } from "lucide-react-native"
import { Text, View } from "react-native"
import { LineChart } from "react-native-chart-kit"
import colors from "tailwindcss/colors"

interface FinancialSummaryProps {
  monthTotal: string
  received: { amount: string; count: number }
  onTime: number
  overdue: number
  chartData: number[]
}

export function TabFinancialSummary({
  monthTotal,
  received,
  onTime,
  overdue,
  chartData,
}: FinancialSummaryProps) {
  return (
    <View className="flex-1">
      {/* Title */}
      <Text className="text-lg font-bold text-gray-800 mb-4">
        Resumo Financeiro
      </Text>

      {/* Main Card - Month Total */}
      <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-gray-500">Total do mês</Text>
            <Text className="text-3xl font-extrabold text-gray-900">
              {monthTotal}
            </Text>
          </View>
          <DollarSign size={28} color={colors.blue[600]} />
        </View>
      </View>

      {/* Small Cards - received, on time, overdue */}
      <View className="flex-row gap-3 mb-4">
        <View className="flex-1 bg-green-50 border border-green-200 rounded-xl p-4">
          <Text className="text-green-700 font-medium">Recebido</Text>
          <Text className="text-lg font-bold text-green-800 mt-1">
            {received.amount}
          </Text>
          <Text className="text-sm text-green-600">
            {received.count} pagamentos
          </Text>
        </View>

        <View className="flex-1 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <Text className="text-gray-700 font-medium">Em dia</Text>
          <Text className="text-lg font-bold text-gray-800 mt-1">{onTime}</Text>
          <Text className="text-sm text-gray-500">alunos</Text>
        </View>

        <View className="flex-1 bg-red-50 border border-red-200 rounded-xl p-4">
          <Text className="text-red-700 font-medium">Atrasados</Text>
          <Text className="text-lg font-bold text-red-800 mt-1">{overdue}</Text>
          <Text className="text-sm text-red-600">alunos</Text>
        </View>
      </View>

      {/* Chart */}
      <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-gray-700 font-semibold">Evolução Mensal</Text>
          <TrendingUp size={20} color={colors.blue[600]} />
        </View>
        <LineChart
          data={{
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            datasets: [{ data: chartData }],
          }}
          width={320}
          height={180}
          chartConfig={{
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            color: () => colors.blue[600],
            labelColor: () => colors.gray[500],
            propsForDots: {
              r: "4",
              strokeWidth: "2",
              stroke: colors.blue[600],
            },
          }}
          bezier
          style={{ borderRadius: 16 }}
        />
      </View>
    </View>
  )
}
