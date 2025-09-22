import { ChevronRight, CreditCard, PlusCircle } from 'lucide-react-native';
import { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from 'tailwindcss/colors';

export default function PaymentsScreen() {
  const [filter, setFilter] = useState('30d');

  const nextPayment = {
    value: 'R$ 250,00',
    dueDate: '10/10/2025',
    status: 'Em aberto',
    plan: 'Mensal Jiu-Jitsu',
  };

  const transactions = [
    {
      id: '1',
      value: 'R$ 250,00',
      date: '10/09/2025',
      method: 'Cartão',
      status: 'Pago',
    },
    {
      id: '2',
      value: 'R$ 250,00',
      date: '10/08/2025',
      method: 'Pix',
      status: 'Pago',
    },
    {
      id: '3',
      value: 'R$ 250,00',
      date: '10/07/2025',
      method: 'Cartão',
      status: 'Pago',
    },
  ];

  const paymentMethods = [
    { id: '1', type: 'Cartão •••• 1234' },
    { id: '2', type: 'Pix (chave cadastrada)' },
    { id: '3', type: 'Boleto bancário' },
  ];

  const renderTransaction = ({ item }: any) => (
    <View className="flex-row justify-between items-center bg-white border border-gray-200 rounded-xl p-3 mb-2">
      <View>
        <Text className="font-semibold text-gray-800">{item.value}</Text>
        <Text className="text-sm text-gray-500">{item.date}</Text>
        <Text className="text-xs text-gray-400">{item.method}</Text>
      </View>
      <Text
        className={`text-sm font-medium ${
          item.status === 'Pago' ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {item.status}
      </Text>
    </View>
  );

  return (
    <ScrollView className="flex-1 bg-gray-50 p-4 ">
      {/* Próxima Mensalidade */}
      <View className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-100">
        <Text className="text-lg font-bold text-gray-800 mb-2">
          Próxima mensalidade
        </Text>
        <Text className="text-2xl font-bold text-gray-900">
          {nextPayment.value}
        </Text>
        <Text className="text-sm text-gray-500">
          Vencimento: {nextPayment.dueDate}
        </Text>
        <Text
          className={`mt-1 text-sm font-medium ${
            nextPayment.status === 'Em aberto'
              ? 'text-yellow-600'
              : nextPayment.status === 'Pago'
                ? 'text-green-600'
                : 'text-red-600'
          }`}
        >
          {nextPayment.status}
        </Text>
        <Text className="mt-2 text-gray-600">{nextPayment.plan}</Text>

        {/* Botão de pagar agora mais integrado */}
        <TouchableOpacity className="flex-row items-center justify-center gap-2 bg-blue-600 rounded-xl py-3 mt-4">
          <CreditCard size={18} color="white" />
          <Text className="text-center text-white font-semibold">
            Pagar agora
          </Text>
        </TouchableOpacity>
      </View>

      {/* Métodos de Pagamento */}
      <View className="mb-6">
        <Text className="text-lg font-bold text-gray-800 mb-3">
          Métodos de pagamento
        </Text>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            className="flex-row justify-between items-center bg-white border border-gray-200 rounded-xl p-4 mb-2"
          >
            <View className="flex-row items-center gap-2">
              <CreditCard size={18} color={colors.gray[600]} />
              <Text className="text-gray-700">{method.type}</Text>
            </View>
            <ChevronRight size={18} color={colors.gray[500]} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity className="flex-row items-center justify-center gap-2 mt-3 bg-blue-50 border border-dashed border-blue-400 rounded-xl py-3">
          <PlusCircle size={18} color={colors.blue[600]} />
          <Text className="text-blue-600 font-semibold">
            Adicionar método de pagamento
          </Text>
        </TouchableOpacity>
      </View>

      {/* Histórico */}
      <View className="mb-25">
        <View className="flex-row justify-between items-center mb-3">
          <Text className="text-lg font-bold text-gray-800">
            Histórico de pagamentos
          </Text>
          <View className="flex-row bg-gray-100 rounded-lg overflow-hidden">
            {['30d', '90d', '1a'].map((f) => (
              <TouchableOpacity
                key={f}
                onPress={() => setFilter(f)}
                className={`px-3 py-1.5 ${filter === f ? 'bg-blue-600' : ''}`}
              >
                <Text
                  className={`text-sm ${
                    filter === f ? 'text-white' : 'text-gray-600'
                  }`}
                >
                  {f}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={renderTransaction}
        />
        <TouchableOpacity className="mt-2">
          <Text className="text-blue-600 text-sm font-medium">
            Baixar recibos em PDF
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
