import {
  EnumMartialArtType,
  EnumPaymentStatus,
  IStudent,
} from '@/@types/users';
import { Badge } from '@/components/ui/Badge';
import { FAKE_STUDENTS_PAYMENT } from '@/constants/fakes';
import { Edit, Eye, UserPlus } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
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
        return (
          <Badge label="Pendente" className="bg-yellow-100" labelClasses="text-yellow-800" />
        );
      case 'overdue':
        return <Badge label="Em Atraso" className="bg-red-100" labelClasses="text-red-800" />;
      default:
        return (
          <Badge label="Desconhecido" className="bg-gray-100" labelClasses="text-gray-800" />
        );
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

  const filteredStudents = FAKE_STUDENTS_PAYMENT.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesSearch;
  });

  const renderItem: ListRenderItem<IStudent> = ({ item: student }) => (
    <View className="flex-row items-center justify-between p-4 mb-3 border border-gray-200 rounded-lg">
      <View className="flex-row items-center flex-1">
        {/* Avatar */}
        <Image
          source={{ uri: student.avatar }}
          className="w-12 h-12 rounded-full"
        />

        {/* Nome + Status + Aulas */}
        <View className="ml-3 flex-1">
          <View className="flex-row items-center mb-1">
            <Text className="font-medium mr-2">{student.name}</Text>
            {getPaymentStatusLabel(student.paymentStatus)}
          </View>

          <View className="flex-row flex-wrap mt-1">
            {student.classes.map((cls, idx) => (
              <Text
                key={idx}
                className={`text-xs px-2 py-1 mr-1 mb-1 rounded ${getMartialArtColor(
                  cls.type
                )}`}
              >
                {cls.type} - {cls.graduation}
              </Text>
            ))}
          </View>
        </View>

        {/* Botões de ação */}
        <TouchableOpacity className="ml-3 bg-gray-100 p-2 rounded">
          <Eye size={16} />
        </TouchableOpacity>
        <TouchableOpacity className="ml-2 bg-gray-100 p-2 rounded">
          <Edit size={16} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="p-4">
        {/* Filtros */}
        <View className="mb-4">
          <Text className="text-lg font-bold flex-row items-center">
            Buscar e Filtrar Alunos
          </Text>
          <View className="mt-2 bg-gray-100 p-2 rounded-lg">
            <Text className="text-sm font-medium">
              Buscar por nome ou email
            </Text>
            <TextInput
              className="bg-white rounded-lg p-2 mt-1 border border-gray-300"
              placeholder="Digite o nome ou email..."
              value={searchTerm}
              onChangeText={setSearchTerm}
            />
          </View>
        </View>

        {/* Lista */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">
            Lista de Alunos ({filteredStudents.length})
          </Text>
          <TouchableOpacity className="flex-row items-center bg-blue-500 px-3 py-2 rounded-lg">
            <UserPlus color="white" size={18} />
            <Text className="text-white ml-2">Novo Aluno</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredStudents}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 16 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
