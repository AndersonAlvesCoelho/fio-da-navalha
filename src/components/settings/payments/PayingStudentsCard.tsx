import { IStudent } from '@/@types/my-students'
import { Send } from 'lucide-react-native'
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

interface PayingStudentsCardProps {
  students: IStudent[]
  sendPaymentReminder: () => void
  handlePaymentConfirmation: (id: string, markAsPaid: boolean) => void
}

export default function PayingStudentsCard({
  students,
  sendPaymentReminder,
  handlePaymentConfirmation,
}: PayingStudentsCardProps) {
  const pendingStudents = students.filter(
    (s) => s.paymentStatus === 'pendente'
  )

  const renderItem: ListRenderItem<IStudent> = ({ item: student }) => (
    <View
      className="flex-row justify-between items-center border border-gray-200 rounded-lg p-2 "
    >
      <View className="flex-row items-center gap-2">
        <Image
          source={{ uri: student.avatar }}
          className="w-10 h-10 rounded-full"
        />
        <View>
          <Text className="font-medium">{student.name}</Text>
          <Text className="text-sm text-gray-500">
            R$ {student.monthlyPayment} • {student.graduation}
          </Text>
        </View>
      </View>

      <View className="items-end gap-2">
        <Text
          className={`text-xs px-2 py-0.5 rounded-full ${
            student.paymentStatus === 'pago'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {student.paymentStatus === 'pago' ? 'Pago' : 'Pendente'}
        </Text>

        <TouchableOpacity
          onPress={() =>
            handlePaymentConfirmation(
              student.id,
              student.paymentStatus === 'pendente'
            )
          }
          className={`px-3 py-1 rounded-md ${
            student.paymentStatus === 'pago'
              ? 'border border-gray-300'
              : 'bg-green-500'
          }`}
        >
          <Text
            className={`text-sm ${
              student.paymentStatus === 'pago'
                ? 'text-black'
                : 'text-white'
            }`}
          >
            {student.paymentStatus === 'pago'
              ? 'Marcar Pendente'
              : 'Confirmar Pagamento'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <View className="gap-4">
      {/* Header */}
      <View className="flex-row justify-between items-center gap-4">
        <View className="flex-1">
          <Text className="text-lg font-semibold">Controle de Pagamentos</Text>
          <Text className="text-sm text-gray-500">
            Gerencie os pagamentos mensais dos alunos
          </Text>
        </View>

        {pendingStudents.length > 0 && (
          <TouchableOpacity
            onPress={sendPaymentReminder}
            className="flex-row items-center border border-gray-300 px-3 py-1.5 rounded-md"
          >
            <Send size={16} className="mr-2 text-gray-700" />
            <Text className="text-sm text-gray-700">Enviar Lembrete</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* FlatList de alunos */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
