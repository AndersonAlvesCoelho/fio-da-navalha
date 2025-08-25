import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HeaderNotifications() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-row justify-between items-center px-4 py-2 gap-6 bg-primary-500 rounded-b-xl"
      style={{ paddingTop: insets.top }}
    >
      <Text className="text-xl text-neutral-200 font-bold"> Notificações</Text>
    </View>
  );
}
