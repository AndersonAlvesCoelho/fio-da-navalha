import { colors } from '@/assets/styles/theme';
import BottomSheet from '@gorhom/bottom-sheet';
import { MoreVertical, Plus, Search, Trash2 } from 'lucide-react-native';
import { useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Guest {
  id: string;
  name: string;
  contact: string;
  modality: string;
  visitDates: string[];
  notes?: string;
  status: 'pending' | 'active' | 'expired' | 'converted';
  accessLink?: string;
  expiresAt?: string;
}

const mockGuests: Guest[] = [
  {
    id: '1',
    name: 'Lucas Fernandes',
    contact: 'lucas@email.com',
    modality: 'Jiu-Jitsu',
    visitDates: ['21/09/2025'],
    notes: 'Primeira visita',
    status: 'pending',
  },
  {
    id: '2',
    name: 'Beatriz Almeida',
    contact: 'beatriz@email.com',
    modality: 'Judô',
    visitDates: ['22/09/2025'],
    status: 'active',
  },
  {
    id: '3',
    name: 'João Pedro',
    contact: 'joao@email.com',
    modality: 'Crossfit',
    visitDates: ['25/09/2025'],
    status: 'expired',
  },
];

export default function GuestsScreen() {
  const [guests, setGuests] = useState<Guest[]>(mockGuests);
  const [search, setSearch] = useState('');
  const [selectedGuest, setSelectedGuest] = useState<Guest | null>(null);

  const formSheetRef = useRef<BottomSheet>(null);
  const manageSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['70%'], []);

  const [newGuest, setNewGuest] = useState({
    expiresIn: '1d', // valor padrão
    usageType: 'Único', // valor padrão
  });

  const handleGenerateLink = () => {
    const expiresAt = (() => {
      if (newGuest.expiresIn === 'Ilimitado') return 'Nunca';
      const now = new Date();

      switch (newGuest.expiresIn) {
        case '1h':
          now.setHours(now.getHours() + 1);
          break;
        case '1d':
          now.setDate(now.getDate() + 1);
          break;
        case '1 semana':
          now.setDate(now.getDate() + 7);
          break;
        case '1 mês':
          now.setMonth(now.getMonth() + 1);
          break;
      }
      return now.toLocaleString();
    })();

    const generatedLink = `https://academia.com/convidado?token=${Math.random()
      .toString(36)
      .substring(2)}&usage=${newGuest.usageType}`;

    console.log('🔗 Link gerado:', generatedLink, 'expira em:', expiresAt);

    // aqui você poderia salvar esse link no backend ou associar ao convidado
    setNewGuest({ expiresIn: '1d', usageType: 'Único' }); // reset
    formSheetRef.current?.close();
  };

  const openForm = () => {
    formSheetRef.current?.snapToIndex(0);
  };

  const openManage = (guest: Guest) => {
    setSelectedGuest(guest);
    manageSheetRef.current?.snapToIndex(0);
  };

  const handleRemoveGuest = () => {
    if (!selectedGuest) return;
    setGuests((prev) => prev.filter((g) => g.id !== selectedGuest.id));
    manageSheetRef.current?.snapToIndex(-1);
  };

  const filteredGuests = guests.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderGuestItem = ({ item }: { item: Guest }) => (
    <View className="bg-white p-4 rounded-xl mb-2 border border-gray-100 flex-row justify-between items-center">
      <View>
        <Text className="font-semibold text-gray-800">{item.name}</Text>
        <Text className="text-gray-500 text-sm">{item.contact}</Text>
        <Text className="text-sm mt-1">
          Status:{' '}
          <Text
            className={`font-semibold ${
              item.status === 'pending'
                ? 'text-yellow-600'
                : item.status === 'active'
                  ? 'text-green-600'
                  : item.status === 'expired'
                    ? 'text-red-600'
                    : 'text-blue-600'
            }`}
          >
            {item.status}
          </Text>
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => openManage(item)}
        className="p-2 rounded-lg"
      >
        <MoreVertical size={20} color={colors.gray[500]} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-50">
      {/* Header com pesquisa e botão */}
      <View className="flex-row items-center px-4 py-3 bg-white border-b border-gray-200">
        <View className="flex-1 flex-row items-center bg-gray-100 rounded-lg px-3 py-2">
          <Search size={18} color={colors.gray[400]} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Pesquisar convidado..."
            className="ml-2 flex-1 text-gray-700"
            placeholderTextColor={colors.gray[400]}
          />
        </View>

        <TouchableOpacity
          onPress={openForm}
          className="ml-3 bg-blue-600 p-3 rounded-xl"
        >
          <Plus size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={filteredGuests}
        keyExtractor={(item) => item.id}
        renderItem={renderGuestItem}
        contentContainerStyle={{ padding: 16, paddingBottom: 80 }}
      />

      {/* BottomSheet Formulário */}
      <BottomSheet
        index={-1}
        ref={formSheetRef}
        snapPoints={['60%']}
        enableDynamicSizing={false}
        enablePanDownToClose
        onClose={() => {
          manageSheetRef.current?.close();
        }}
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 6,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
        }}
        backgroundStyle={{
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          backgroundColor: '#F9FAFB', // fundo cinza claro
        }}
      >
        <View className="p-5 gap-6">
          {/* Título */}
          <Text className="text-xl font-semibold text-gray-900 text-center">
            Gerar link de convite
          </Text>

          {/* Seleção de validade */}
          <View>
            <Text className="text-gray-600 font-medium mb-3">
              Tempo de expiração
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {['1h', '1d', '1 semana', '1 mês', 'Ilimitado'].map((opt) => {
                const active = newGuest.expiresIn === opt;
                return (
                  <TouchableOpacity
                    key={opt}
                    onPress={() => setNewGuest({ ...newGuest, expiresIn: opt })}
                    className={`px-4 py-2 rounded-2xl  border ${
                      active
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        active ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {opt}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Seleção de tipo de uso */}
          <View>
            <Text className="text-gray-600 font-medium mb-3">Tipo de uso</Text>
            <View className="flex-row gap-3">
              {['Único', 'Livre'].map((opt) => {
                const active = newGuest.usageType === opt;
                return (
                  <TouchableOpacity
                    key={opt}
                    onPress={() => setNewGuest({ ...newGuest, usageType: opt })}
                    className={`px-4 py-3 rounded-xl border flex-1 items-center ${
                      active
                        ? 'bg-blue-50 border-blue-500'
                        : 'bg-white border-gray-300'
                    }`}
                  >
                    <Text
                      className={`text-sm font-medium ${
                        active ? 'text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      {opt}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Botão de gerar link */}
          <TouchableOpacity
            onPress={handleGenerateLink}
            className="bg-blue-600 py-4 rounded-2xl shadow-sm"
          >
            <Text className="text-white text-center font-semibold text-base">
              Gerar link de convite
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>

      {/* BottomSheet Gerenciar Convidado */}
      <BottomSheet
        index={-1}
        ref={manageSheetRef}
        snapPoints={['40%']}
        enableDynamicSizing={false}
        enablePanDownToClose
        onClose={() => {
          manageSheetRef.current?.close();
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
        {selectedGuest && (
          <View className="p-4 gap-3">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Gerenciar Convidado
            </Text>

            <Text className="text-base font-semibold">
              {selectedGuest.name}
            </Text>
            <Text className="text-gray-500">{selectedGuest.contact}</Text>
            <Text className="text-gray-500">
              Modalidade: {selectedGuest.modality}
            </Text>

            {selectedGuest.accessLink && (
              <View className="mt-2">
                <Text className="text-sm text-blue-600">
                  Link: {selectedGuest.accessLink}
                </Text>
                <Text className="text-xs text-gray-500">
                  Expira em: {selectedGuest.expiresAt}
                </Text>
              </View>
            )}

            <TouchableOpacity
              onPress={handleRemoveGuest}
              className="bg-red-600 py-3 rounded-xl mt-2 flex-row justify-center items-center"
            >
              <Trash2 size={18} color="white" />
              <Text className="text-white font-semibold ml-2">
                Desvincular convidado
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </BottomSheet>
    </View>
  );
}
