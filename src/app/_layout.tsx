import '@/assets/styles/global.css';
import { ThemeProvider } from '@/contexts/theme.context';

import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View className="flex-1 justify-center bg-zinc-100 ">
      <StatusBar style="auto" />

      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </View>
  );
}
