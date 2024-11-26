// IMPORT'S
import { ScrollView, View } from 'react-native';

// SERVICE'S

// COMPONET'S
import { BaseText } from '@/components/ui/BaseText';

// STYLE'S

export default function ScreenPublication() {
  return (
    <ScrollView>
      <View className="flex-grow justify-center px-6 py-8 gap-6">
        <BaseText className="text-2xl font-bold">Story</BaseText>
      </View>
    </ScrollView>
  );
}
