import {
  EnumMartialArtType,
  EnumPaymentStatus,
  IStudent,
} from '@/@types/users';
import { Badge } from '@/components/ui/Badge';
import { FAKE_STUDENTS_PAYMENT } from '@/constants/fakes';
import { UserPlus } from 'lucide-react-native';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StudentsManagement() {
  const [searchTerm, setSearchTerm] = useState('');

  const getPaymentStatusLabel = (status: EnumPaymentStatus) => {
    switch (status) {
      case 'paid':
        return <Badge label="Pago" className="bg-green-100" labelClasses="text-green-800" />;
      case 'pending':
        return <Badge label="Pendente" className="bg-yellow-100" labelClasses="text-yellow-800" />;
      case 'overdue':
        return <Badge label="Em Atraso" className="bg-red-100" labelClasses="text-red-800" />;
      default:
        return <Badge label="Desconhecido" className="bg-gray-100" labelClasses="text-gray-800" />;
    }
  };

  const getMartialArtColor = (type: EnumMartialArtType) => {
    switch (type) {
      case 'Jiu Jitsu':
        return 'bg-blue-200';
      case 'Capoeira':
        return 'bg-green-200';
      default:
        return 'bg-gray-200';
    }
  };

  const filteredStudents = useMemo(
    () =>
      FAKE_STUDENTS_PAYMENT.filter((s) =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  const ListHeader = () => (
    <View className="p-4">
      {/* Filtros */}
      <View className="mb-4">
        <Text className="text-lg font-bold">Buscar e Filtrar Alunos</Text>
        <View className="mt-2 bg-gray-100 p-2 rounded-lg">
          <Text className="text-sm font-medium">Buscar por nome ou email</Text>
          <TextInput
            className="bg-white rounded-lg p-2 mt-1 border border-gray-300"
            placeholder="Digite o nome ou email..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>

      {/* Toolbar */}
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-lg font-bold">
          Lista de Alunos ({filteredStudents.length})
        </Text>
        <TouchableOpacity className="flex-row items-center bg-blue-500 px-3 py-2 rounded-lg">
          <UserPlus color="white" size={18} />
          <Text className="text-white ml-2">Novo Aluno</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const ListEmpty = () => (
    <View className="items-center justify-center py-20 px-4">
      <Text className="text-5xl mb-4">📭</Text>
      <Text className="text-lg font-semibold text-gray-600 text-center">
        Nenhum aluno encontrado
      </Text>
      <Text className="text-sm text-gray-400 text-center mt-1">
        Ajuste sua busca acima
      </Text>
    </View>
  );

  const renderItem: ListRenderItem<IStudent> = ({ item: student }) => (
    <View className="flex-row items-center justify-between p-4 mb-3 border border-gray-200 rounded-lg bg-white mx-4">
      <View className="flex-row items-center flex-1">
        <Image source={{ uri: student.avatar }} className="w-12 h-12 rounded-full" />

        <View className="ml-3 flex-1">
          <View className="flex-row items-center mb-1">
            <Text className="font-medium mr-2">{student.name}</Text>
            {getPaymentStatusLabel(student.paymentStatus)}
          </View>

          <View className="flex-row flex-wrap mt-1">
            {student.classes.map((cls, idx) => {
              const graduationName =
                typeof cls.graduation === 'string'
                  ? cls.graduation
                  : (cls.graduation?.name ?? '');

              return (
                <View
                  key={idx}
                  className={`px-2 py-1 mr-1 mb-1 rounded ${getMartialArtColor(cls.type)}`}
                >
                  <Text className="text-xs text-gray-800">
                    {cls.type} {graduationName ? `- ${graduationName}` : ''}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </SafeAreaView>
  );
}
