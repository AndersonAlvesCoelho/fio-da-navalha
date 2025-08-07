import PayingStudentsCard from '@/components/settings/payments/PayingStudentsCard';
import { StudentManagementCard } from '@/components/settings/StudentManagementCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { FAKE_STUDENTS, FAKE_STUDENTS_PAYMENT } from '@/constants/fakes';
import React from 'react';
import { Text, View } from 'react-native';

export default function MyStudentsScreen() {
  const totalStudents = FAKE_STUDENTS_PAYMENT.length;
  const pending = FAKE_STUDENTS_PAYMENT.filter(
    (s) => s.paymentStatus === 'pendente'
  ).length;
  const guests = FAKE_STUDENTS_PAYMENT.filter((s) => s.isGuest).length;
  const totalPaid = FAKE_STUDENTS_PAYMENT.filter(
    (s) => s.paymentStatus === 'pago'
  ).reduce((acc, cur) => acc + cur.monthlyPayment, 0);

  const currentMonth = new Intl.DateTimeFormat('pt-BR', {
    month: 'long',
  }).format(new Date());

  const sendPaymentReminder = () => {
    console.log('Lembrete enviado para alunos com pendência.');
  };

  const handlePaymentConfirmation = (id: string, markAsPaid: boolean) => {
    console.log(
      markAsPaid
        ? `Pagamento confirmado para aluno ${id}`
        : `Pagamento marcado como pendente para aluno ${id}`
    );
  };

  const getGraduationColor = (graduation: string) => {
    switch (graduation) {
      case 'Branca':
        return 'bg-gray-200 text-gray-800';
      case 'Azul':
        return 'bg-blue-200 text-blue-800';
      case 'Amarela':
        return 'bg-yellow-200 text-yellow-800';
      case 'Verde':
        return 'bg-green-200 text-green-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <View className="flex-1 bg-white gap-4">
      <View className="bg-zinc-200  p-4 py-8">
        <Text className="text-2xl font-bold">Meus Alunos</Text>
        <View className="gap-2">
          <Text className="text-base font-medium mb-2 text-gray-800">
            Resumo de{' '}
            {currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1)}
          </Text>
          <View className="flex-row flex-wrap justify-between ">
            <View className="mb-2 w-[48%]">
              <Text className="text-xs text-gray-500">Total de Alunos</Text>
              <Text className="text-lg font-bold text-gray-900">
                {totalStudents}
              </Text>
            </View>
            <View className="mb-2 w-[48%]">
              <Text className="text-xs text-gray-500">
                Pagamentos Pendentes
              </Text>
              <Text className="text-lg font-bold text-red-600">{pending}</Text>
            </View>
            <View className="mb-2 w-[48%]">
              <Text className="text-xs text-gray-500">Convidados</Text>
              <Text className="text-lg font-bold text-gray-900">{guests}</Text>
            </View>
            <View className="mb-2 w-[48%]">
              <Text className="text-xs text-gray-500">Total Arrecadado</Text>
              <Text className="text-lg font-bold text-green-700">
                R$ {totalPaid}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-1 px-4 -mt-4">
        <Tabs defaultValue="payments">
          <TabsList className="relative -mt-4 rounded-xl bg-slate-100 p-1">
            <TabsTrigger value="payments" title="Pagamentos" />
            <TabsTrigger value="management" title="Gerenciamento" />
          </TabsList>

          <TabsContent value="payments" className="border border-slate-100">
            <PayingStudentsCard
              students={FAKE_STUDENTS_PAYMENT}
              sendPaymentReminder={sendPaymentReminder}
              handlePaymentConfirmation={handlePaymentConfirmation}
            />
          </TabsContent>

          <TabsContent value="management" className="border border-slate-100">
            <StudentManagementCard
              students={FAKE_STUDENTS}
              getGraduationColor={getGraduationColor}
            />
          </TabsContent>
        </Tabs>
      </View>
    </View>
  );
}
