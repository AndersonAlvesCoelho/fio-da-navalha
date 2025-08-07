import { BellIcon } from 'lucide-react-native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

type Notification = {
  id: string;
  title: string;
  description: string;
  time: string;
  type?: 'info' | 'warning' | 'event' | 'like' | 'comment';
};

const notifications: Notification[] = [
  {
    id: '1',
    title: 'João curtiu seu post',
    description: '“Treino puxado hoje 💪🔥”',
    time: 'Há 1h',
    type: 'like',
  },
  {
    id: '2',
    title: 'Maria comentou no seu post',
    description: '“Esse evento foi incrível!”',
    time: 'Há 2h',
    type: 'comment',
  },
  {
    id: '3',
    title: 'Novo evento disponível',
    description: 'Aula de Capoeira adicionada às 19h.',
    time: 'Há 6h',
    type: 'event',
  },
  {
    id: '4',
    title: 'Atualização do sistema',
    description: 'O app foi atualizado com melhorias.',
    time: 'Ontem',
    type: 'info',
  },
];


const getColorByType = (type?: string) => {
  switch (type) {
    case 'event':
      return '#10B981'; // verde
    case 'warning':
      return '#F59E0B'; // amarelo
    case 'like':
      return '#EF4444'; // vermelho
    case 'comment':
      return '#8B5CF6'; // roxo
    case 'info':
    default:
      return '#3B82F6'; // azul
  }
};

const NotificationItem = ({ item }: { item: Notification }) => {
  const color = getColorByType(item.type);

  return (
    <TouchableOpacity
      className="flex-row gap-4 items-center space-x-3 bg-white rounded-xl px-4 py-3 mx-4 mb-2 shadow-sm"
      activeOpacity={0.7}
    >
      <View
        className="w-10 h-10 rounded-full items-center justify-center"
        style={{ backgroundColor: color + '20' }}
      >
        <BellIcon size={20} color={color} />
      </View>

      <View className="flex-1">
        <Text className="font-semibold text-gray-800">{item.title}</Text>
        <Text className="text-sm text-gray-500">{item.description}</Text>
        <Text className="text-xs text-gray-400 mt-1">{item.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function TabNotificationsScreen() {
  return (
    <View className="flex-1 bg-gray-100 pt-4">
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <NotificationItem item={item} />}
        />
      ) : (
        <View className="flex-1 items-center justify-center px-4">
          <Text className="text-6xl mb-4">🔕</Text>
          <Text className="text-lg font-semibold text-gray-600 text-center">
            Nenhuma notificação ainda
          </Text>
          <Text className="text-sm text-gray-400 text-center mt-1">
            Assim que houver novidades, você verá aqui.
          </Text>
        </View>
      )}
    </View>
  );
}
