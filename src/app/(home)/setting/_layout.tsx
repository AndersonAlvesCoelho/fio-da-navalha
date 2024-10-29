// IMPORT'S
import { Slot } from 'expo-router';
import { Image, View } from 'react-native';

// COMPONET'S
import { colors } from '@/assets/styles/theme';
import { BaseText } from '@/components/ui/BaseText';
import { ButtonRoot } from '@/components/ui/Button';
import { EditIcon } from 'lucide-react-native';

// STYLE'S

export default function RootLayout() {
  return (
    <View className="flex-1 justify-center bg-zinc-100 px-6 py-8">
      <View className="flex-col gap-6 items-center">
        <BaseText variant="title">Settings</BaseText>

        <View className="gap-3 justify-center items-center">
          <View className="flex-row">
            <Image
              source={{ uri: 'https://fakeimg.pl/350x200/?text=🖼️' }}
              className="h-20 w-20 rounded-full"
              resizeMode="cover"
              alt="Fake image login"
            />
            <ButtonRoot variant="link" className='absolute right-0 bottom-0'>
              <EditIcon size={18} color={colors.primary[500]} />
            </ButtonRoot>
          </View>
          <BaseText>Lucas Scott</BaseText>
        </View>
      </View>
      <Slot />
    </View>
  );
}
