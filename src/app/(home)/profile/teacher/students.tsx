import { colors } from '@/assets/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { BellIcon, EllipsisVertical, Search } from 'lucide-react-native';
import { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Student {
  id: string;
  name: string;
  nickname: string;
  email: string;
  birthDate: string;
  status: 'paid' | 'overdue';
  paymentMethod: string;
  avatar: string;
}

const mockStudents: Student[] = [
  {
    id: '1',
    name: 'Anderson Alves',
    nickname: '@anderson',
    email: 'anderson@email.com',
    birthDate: '15/08/1996',
    status: 'paid',
    paymentMethod: 'Cartão de crédito',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'João Silva',
    nickname: '@joao',
    email: 'joao@email.com',
    birthDate: '02/04/1995',
    status: 'overdue',
    paymentMethod: 'PIX',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: '3',
    name: 'Maria Souza',
    nickname: '@maria',
    email: 'maria@email.com',
    birthDate: '22/09/1997',
    status: 'paid',
    paymentMethod: 'Boleto',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: '4',
    name: 'Carlos Lima',
    nickname: '@carlos',
    email: 'carlos@email.com',
    birthDate: '10/01/1994',
    status: 'overdue',
    paymentMethod: 'Cartão de crédito',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
  {
    id: '5',
    name: 'Ana Paula',
    nickname: '@ana',
    email: 'ana@email.com',
    birthDate: '30/06/1998',
    status: 'paid',
    paymentMethod: 'PIX',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: '6',
    name: 'Ricardo Mendes',
    nickname: '@ricardo',
    email: 'ricardo@email.com',
    birthDate: '12/11/1992',
    status: 'overdue',
    paymentMethod: 'Boleto',
    avatar: 'https://i.pravatar.cc/150?img=6',
  },
  {
    id: '7',
    name: 'Fernanda Costa',
    nickname: '@fernanda',
    email: 'fernanda@email.com',
    birthDate: '05/05/1999',
    status: 'paid',
    paymentMethod: 'Cartão de crédito',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: '8',
    name: 'Gabriel Rocha',
    nickname: '@gabriel',
    email: 'gabriel@email.com',
    birthDate: '19/07/1996',
    status: 'overdue',
    paymentMethod: 'PIX',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: '9',
    name: 'Juliana Martins',
    nickname: '@juliana',
    email: 'juliana@email.com',
    birthDate: '28/02/1993',
    status: 'paid',
    paymentMethod: 'Boleto',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: '10',
    name: 'Paulo Henrique',
    nickname: '@paulo',
    email: 'paulo@email.com',
    birthDate: '09/12/1997',
    status: 'paid',
    paymentMethod: 'Cartão de crédito',
    avatar: 'https://i.pravatar.cc/150?img=10',
  },
  {
    id: '11',
    name: 'Camila Oliveira',
    nickname: '@camila',
    email: 'camila@email.com',
    birthDate: '14/03/1995',
    status: 'overdue',
    paymentMethod: 'PIX',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: '12',
    name: 'Thiago Pereira',
    nickname: '@thiago',
    email: 'thiago@email.com',
    birthDate: '22/08/1994',
    status: 'paid',
    paymentMethod: 'Boleto',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '13',
    name: 'Beatriz Almeida',
    nickname: '@beatriz',
    email: 'beatriz@email.com',
    birthDate: '03/01/1998',
    status: 'overdue',
    paymentMethod: 'Cartão de crédito',
    avatar: 'https://i.pravatar.cc/150?img=13',
  },
  {
    id: '14',
    name: 'Lucas Fernandes',
    nickname: '@lucas',
    email: 'lucas@email.com',
    birthDate: '07/06/1996',
    status: 'paid',
    paymentMethod: 'PIX',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    id: '15',
    name: 'Patrícia Ribeiro',
    nickname: '@patricia',
    email: 'patricia@email.com',
    birthDate: '21/10/1992',
    status: 'overdue',
    paymentMethod: 'Boleto',
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
];

export default function StudentsScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const notifySheetRef = useRef<BottomSheet>(null);

  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [search, setSearch] = useState('');
  const [overdueStudents, setOverdueStudents] = useState<Student[]>(() =>
    mockStudents.filter((s) => s.status === 'overdue')
  );

  const openDetails = (student: Student) => {
    setSelectedStudent(student);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const renderStatusBadge = (status: 'paid' | 'overdue') => {
    const isPaid = status === 'paid';
    return (
      <View
        className={`px-2 py-1 rounded-full ${
          isPaid ? 'bg-green-100' : 'bg-red-100'
        }`}
      >
        <Text
          className={`text-xs font-semibold ${
            isPaid ? 'text-green-700' : 'text-red-700'
          }`}
        >
          {isPaid ? 'Em dia' : 'Atrasado'}
        </Text>
      </View>
    );
  };

  const renderStudent = ({ item }: { item: Student }) => (
    <View className="bg-white rounded-xl py-2 px-4 border border-gray-100 shadow-sm flex-row justify-between items-center">
      <View className="flex-row items-center gap-3">
        <Image
          source={{ uri: item.avatar }}
          className="w-12 h-12 rounded-full"
        />
        <View>
          <Text className="text-base font-medium text-gray-800">
            {item.name}
          </Text>
          <Text className="text-sm text-gray-500">{item.nickname}</Text>
          {renderStatusBadge(item.status)}
        </View>
      </View>
      <TouchableOpacity onPress={() => openDetails(item)}>
        <EllipsisVertical size={22} color={colors.gray[600]} />
      </TouchableOpacity>
    </View>
  );

  const filteredStudents = mockStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.nickname.toLowerCase().includes(search.toLowerCase())
  );

  const openNotifyAllSheet = () => {
    notifySheetRef.current?.snapToIndex(0);
  };

  const confirmNotifyAll = () => {
    console.log('Notificando todos os alunos atrasados:', overdueStudents);
    notifySheetRef.current?.close();
  };

  return (
    <>
      {/* Search Input */}
      <View className="flex-row items-center bg-white px-4 py-2 border-b border-gray-200">
        <Search size={18} color={colors.gray[500]} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Pesquisar aluno..."
          className="flex-1 ml-2 text-gray-700"
          placeholderTextColor={colors.gray[400]}
        />
      </View>

      {/* Notify All Button */}
      {overdueStudents.length > 0 && (
        <TouchableOpacity
          onPress={openNotifyAllSheet}
          className="bg-red-500 rounded-xl py-3 mx-4 my-2 flex-row justify-center items-center gap-2"
        >
          <BellIcon size={20} color="white" />
          <Text className="text-white font-semibold text-base">
            Notificar todos atrasados ({overdueStudents.length})
          </Text>
        </TouchableOpacity>
      )}

      {/* Students List */}
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
        contentContainerStyle={{ gap: 8, padding: 16, paddingBottom: 80 }}
      />

      {/* BottomSheet Student Details */}
      {selectedStudent && (
        <BottomSheet
          index={-1}
          ref={bottomSheetRef}
          snapPoints={['60%']}
          enableDynamicSizing={false}
          enablePanDownToClose
          onClose={() => {
            setSelectedStudent(null);
            bottomSheetRef.current?.close();
          }}
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            elevation: 10,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
          backgroundStyle={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            backgroundColor: 'white',
          }}
        >
          <View className="p-6 gap-6">
            {/* Header */}
            <View className="flex-row items-center gap-4">
              <Image
                source={{ uri: selectedStudent.avatar }}
                className="w-16 h-16 rounded-full"
              />
              <View className="flex-1">
                <Text className="text-xl font-semibold text-gray-900">
                  {selectedStudent.name}
                </Text>
                <Text className="text-sm text-gray-500">
                  {selectedStudent.nickname}
                </Text>
              </View>
            </View>

            {/* Details */}
            <View className="gap-2">
              <Text className="text-base text-gray-700">
                {selectedStudent.email}
              </Text>
              <Text className="text-base text-gray-700">
                Nascimento: {selectedStudent.birthDate}
              </Text>
              <View className="mt-2">
                {renderStatusBadge(selectedStudent.status)}
              </View>
              <Text className="text-base text-gray-700">
                Forma de pagamento:{' '}
                <Text className="font-medium text-gray-900">
                  {selectedStudent.paymentMethod}
                </Text>
              </Text>
            </View>

            {/* Actions */}
            <View className="gap-3">
              {selectedStudent.status === 'overdue' && (
                <TouchableOpacity className="bg-red-500 rounded-xl py-3">
                  <Text className="text-white font-semibold text-center text-base">
                    Notificar atraso
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity className="bg-gray-100 rounded-xl py-3">
                <Text className="text-gray-700 font-semibold text-center text-base">
                  Remover aluno
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BottomSheet>
      )}

      {/* BottomSheet Notify All Confirmation */}
      <BottomSheet
        ref={notifySheetRef}
        snapPoints={['40%']}
        index={-1}
        enableDynamicSizing={false}
        enablePanDownToClose
        onClose={() => {
          notifySheetRef.current?.close();
        }}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
          elevation: 10,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        }}
        backgroundStyle={{
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: 'white',
        }}
      >
        <View className="flex-1  items-center gap-4 p-6">
          <Text className="text-lg font-semibold text-gray-900 text-center">
            Confirmar notificação em massa
          </Text>
          <Text className="text-center text-gray-600">
            Você está prestes a notificar {overdueStudents.length} alunos com
            pagamento atrasado.
          </Text>
          <TouchableOpacity
            onPress={confirmNotifyAll}
            className="bg-red-500 rounded-xl py-3 w-full mt-4"
          >
            <Text className="text-white font-semibold text-center text-base">
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
}
