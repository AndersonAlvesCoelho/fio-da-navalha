import { Slot, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function EventsLayout() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <Slot />
    </View>
  );
}
