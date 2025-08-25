import { colors } from '@/assets/styles/theme';
import { View } from '../Themed';

interface PropsIconWithBottomIndicator {
  focused: boolean;
  Icon: any;
}
export default function IconWithBottomIndicator({
  focused,
  Icon,
}: PropsIconWithBottomIndicator) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon color={focused ? colors.primary['500'] : colors.gray['300']} />
      {focused && (
        <View
          style={{
            height: 3,
            backgroundColor: colors.primary['500'],
            width: 24,
            borderRadius: 2,
            marginTop: 4,
          }}
        />
      )}
    </View>
  );
}
