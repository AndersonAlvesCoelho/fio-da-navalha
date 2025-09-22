import { TabFinancialSummary } from '@/components/profile/teacher/financialManagement/tabs/TabFinancialSummary';
import { CreditCard, DollarSign, FileText } from 'lucide-react-native';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import colors from 'tailwindcss/colors';

export default function FinancialManagementScreen() {
  const [tab, setTab] = useState('resumo');

  const planos = [
    { id: '1', nome: 'Mensal Jiu-Jitsu', valor: 'R$ 250' },
    { id: '2', nome: 'Pacote 10 Aulas', valor: 'R$ 500' },
  ];

  const tabs = [
    { key: 'resumo', label: 'Resumo', icon: DollarSign },
    { key: 'planos', label: 'Planos', icon: FileText },
    { key: 'conta', label: 'Conta', icon: CreditCard },
  ];

  return (
    <View className="flex-1 bg-gray-50">
      {/* Tabs */}
      <View className="flex-row justify-around mb-4 bg-white rounded-xl p-2 shadow-sm">
        {tabs.map((t) => (
          <TouchableOpacity
            key={t.key}
            onPress={() => setTab(t.key)}
            className={`flex-1 items-center py-2 rounded-lg ${
              tab === t.key ? 'bg-blue-600' : ''
            }`}
          >
            <t.icon
              size={18}
              color={tab === t.key ? 'white' : colors.gray[500]}
            />
            <Text
              className={`text-xs mt-1 ${
                tab === t.key ? 'text-white' : 'text-gray-600'
              }`}
            >
              {t.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Resumo */}
      {tab === 'resumo' && (
        <ScrollView className="p-4 pb-25">
          <TabFinancialSummary
            monthTotal="$5,200.00"
            received={{ amount: '$4,700.00', count: 18 }}
            onTime={22}
            overdue={3}
            chartData={[500, 100, 900, 1600, 1000, 2000]}
          />
        </ScrollView>
      )}

      {/* Planos */}
      {tab === 'planos' && (
        <View className="p-4 pb-25">
          <ScrollView>
            <Text className="text-lg font-bold text-gray-800 mb-3">
              Controle de Planos
            </Text>
            {planos.map((p) => (
              <View
                key={p.id}
                className="flex-row justify-between items-center bg-white p-4 rounded-xl mb-2 border border-gray-200"
              >
                <Text className="text-gray-800">{p.nome}</Text>
                <Text className="text-gray-600">{p.valor}</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity className="mt-3 py-3 bg-blue-50 border border-dashed border-blue-400 rounded-xl">
            <Text className="text-center text-blue-600 font-semibold">
              + Criar novo plano
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conta Bancária */}
      {tab === 'conta' && (
        <View className="p-4 pb-25">
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Conta Bancária
          </Text>
          <View className="bg-white p-4 rounded-xl border border-gray-200 mb-2">
            <Text className="text-gray-800">Banco: Nubank</Text>
            <Text className="text-gray-600">Agência: 0001</Text>
            <Text className="text-gray-600">Conta: 123456-7</Text>
          </View>
          <TouchableOpacity className="py-3 bg-blue-600 rounded-xl mt-2">
            <Text className="text-center text-white font-semibold">
              + Cadastrar / Alterar Conta
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
