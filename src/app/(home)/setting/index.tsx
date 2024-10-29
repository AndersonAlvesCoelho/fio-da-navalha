// IMPORT'S
import { ScrollView, View } from 'react-native';

// SERVICE'S
import { SETTINGS_CONSTANT } from '@/constants/setting.constant';

// COMPONET'S
import { colors } from '@/assets/styles/theme';
import DynamicIcon from '@/components/app/DynamicIcon';
import { BaseText } from '@/components/ui/BaseText';
import { Divider } from '@/components/ui/Divider';
import { ChevronRightIcon } from 'lucide-react-native';

// STYLE'S

export default function ScreenSetting() {
  return (
    <ScrollView >
      <View className="flex-grow justify-center px-6 py-8 gap-6">
        {SETTINGS_CONSTANT.map((setting, index) => (
          <View className="gap-1" key={index}>
            <View className="flex-row justify-between items-center ">
              <View className="flex-row items-center gap-2">
                <DynamicIcon name={setting.icon} size={24} />
                <BaseText variant="subtitle">{setting.label}</BaseText>
              </View>
              <ChevronRightIcon size="24" color={colors.primary[500]} />
            </View>
            <Divider />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
