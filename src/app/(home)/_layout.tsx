// IMPORT'S
import { Tabs } from 'expo-router';

// COMPONENT'S
import { CalendarDaysIcon, HomeIcon, ImagesIcon, UserRoundIcon } from 'lucide-react-native';

// STYLE'S
import { colors } from '@/assets/styles/theme';
import { cn } from '@/lib/utils';
import { Text, View } from 'react-native';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 75,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopColor: colors.gray[200],
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                'flex-row items-center justify-center gap-2',
                focused && 'border px-3 py-2 bg-primary-500 rounded-full'
              )}
            >
              <HomeIcon
                color={focused ? colors.primary[50] : colors.primary[500]}
                size={24}
              />
              {focused && (
                <Text className={cn('text-base font-medium text-primary-50')}>
                  Ínicio
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="publication"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                'flex-row items-center justify-center gap-2',
                focused && 'border px-3 py-2 bg-primary-500 rounded-full'
              )}
            >
              <ImagesIcon
                color={focused ? colors.primary[50] : colors.primary[500]}
                size={24}
              />
              {focused && (
                <Text className={cn('text-base font-medium text-primary-50')}>
                  Story
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="scheduling"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                'flex-row items-center justify-center gap-2',
                focused && 'border px-3 py-2 bg-primary-500 rounded-full'
              )}
            >
              <CalendarDaysIcon
                color={focused ? colors.primary[50] : colors.primary[500]}
                size={24}
              />
              {focused && (
                <Text className={cn('text-base font-medium text-primary-50')}>
                  Eventos
                </Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={cn(
                'flex-row items-center justify-center gap-2',
                focused && 'border px-3 py-2 bg-primary-500 rounded-full'
              )}
            >
              <UserRoundIcon
                color={focused ? colors.primary[50] : colors.primary[500]}
                size={24}
              />
              {focused && (
                <Text className={cn('text-base font-medium text-primary-50')}>
                  Perfil
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
