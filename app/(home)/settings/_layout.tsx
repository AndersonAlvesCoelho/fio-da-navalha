import { Slot } from 'expo-router'
import { View } from 'react-native'

export default function Settings() {
  return (
    <View className="flex-1 bg-white dark:bg-black">
      <Slot />
    </View>
  )
}
