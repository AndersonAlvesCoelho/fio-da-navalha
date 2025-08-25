import { colors } from '@/assets/styles/theme';
import { MessageCircleMoreIcon, SearchIcon } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Input } from '../ui/Input';

export default function HeaderHome() {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-row justify-center items-center px-4 py-2 gap-6 bg-primary-500 rounded-b-xl "
      style={{ paddingTop: insets.top }}
    >
      <Input
        placeholder="@..."
        placeholderTextColor={colors.primary['900']}
        className="flex-1"
        inputClasses="border border-transparent "
        leftIcon={<SearchIcon size={18} color={colors.primary['900']} />}
      />

      {/* Ícone de conversa */}
      <TouchableOpacity className="items-center">
        <MessageCircleMoreIcon size={24} color={colors.primary['200']}  />
      </TouchableOpacity>
    </View>
  );
}
