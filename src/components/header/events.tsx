import { colors } from '@/assets/styles/theme';
import { PlusCircleIcon } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function HeaderEvents() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-row justify-between items-center px-4 py-2 gap-6 bg-primary-500 rounded-b-xl"
      style={{ paddingTop: insets.top }}
    >
      <Text className="text-xl text-neutral-200 font-bold"> Eventos</Text>
      <TouchableOpacity>
        <PlusCircleIcon size={32} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}
