// IMPORT'S
import { router, Slot } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';

// COMPONET'S
import { ButtonRoot } from '@/components/ui/Button';
import { CircleUserRoundIcon } from 'lucide-react-native';

// STYLE'S
import { colors } from '@/assets/styles/theme';
import NavigationLayout from '@/components/app/navegation';

export default function RootLayout() {
  return (
    <View className="flex-1 justify-center bg-zinc-100 ">
      <View className="flex-row justify-between px-6 py-8">
        <Image
          source={{ uri: 'https://fakeimg.pl/25' }}
          className="h-20 w-20 rounded-md"
          resizeMode="cover"
          alt="Fake image login"
        />

        <ButtonRoot
          variant="link"
          onPress={() => router.push('/(home)/setting')}
        >
          <Text>
            <CircleUserRoundIcon
              size={40}
              strokeWidth={1}
              color={colors.primary[500]}
            />
          </Text>
        </ButtonRoot>
      </View>
      <ScrollView className="flex-1">
        <Slot />
      </ScrollView>
      <NavigationLayout />
    </View>
  );
}
