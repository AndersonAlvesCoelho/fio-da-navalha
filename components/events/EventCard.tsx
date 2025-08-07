import { IEvent } from '@/@types/events';
import { Text, View } from 'react-native';

export const EventCard = ({ event }: { event: IEvent }) => {
  return (
    <View className="bg-white p-4 rounded-lg shadow-sm mb-3">
      <Text className="font-bold text-lg">{event.title}</Text>
      {event.location && <Text className="text-gray-500">{event.location}</Text>}
      <Text className="text-gray-600">
        {event.date} {event.time ? `• ${event.time}` : ''}
      </Text>
      <Text className="mt-1 text-sm text-gray-700">{event.type.toUpperCase()}</Text>
    </View>
  );
};
