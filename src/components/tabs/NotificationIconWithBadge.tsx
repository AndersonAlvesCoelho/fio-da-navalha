import { colors } from "@/assets/styles/theme";
import { BellIcon } from "lucide-react-native";
import { View } from "react-native";

interface PropsNotificationIconWithBadge {
  focused: boolean;
  hasNotifications: boolean;
}

export default function NotificationIconWithBadge({
  focused,
  hasNotifications,
}: PropsNotificationIconWithBadge) {

  return (
    <View style={{ alignItems: 'center' }}>
      <View>
        <BellIcon color={focused ? colors.primary['500'] : colors.gray['300']} />
        {hasNotifications && (
          <View
            style={{
              position: 'absolute',
              top: -2,
              right: -2,
              width: 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: colors.primary['500'],
            }}
          />
        )}
      </View>
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
