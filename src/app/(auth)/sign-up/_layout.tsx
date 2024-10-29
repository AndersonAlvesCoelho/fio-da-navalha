import '@/assets/styles/global.css';

import { Slot } from 'expo-router';
import { Image, ScrollView, View } from 'react-native';

export default function RootLayout() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 ">
        <Image
          source={{ uri: 'https://fakeimg.pl/350x200/?text=🖼️' }}
          className="h-48 w-full"
          resizeMode="cover"
          alt="Fake image login"
        />

        <Slot />
      </View>
    </ScrollView>
  );
}
