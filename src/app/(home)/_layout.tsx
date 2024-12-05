// IMPORT'S
import { colors } from '@/assets/styles/theme';
import { cn } from '@/lib/utils';
import { Tabs } from 'expo-router';
import {
  CalendarDaysIcon,
  HomeIcon,
  ImagesIcon,
  UserRoundIcon,
} from 'lucide-react-native';
import { Text, View } from 'react-native';

// COMPONENTE GENÉRICO PARA ÍCONES
const TabIcon = ({ focused, icon: Icon, label }: any) => (
  <View
    className={cn(
      'flex-row items-center justify-center gap-2',
      focused && 'border px-5 py-2 bg-primary-500 rounded-full'
    )}
  >
    <Icon
      color={focused ? colors.primary[50] : colors.primary[500]}
      size={24}
    />
    {focused && (
      <Text
        className="text-base font-medium text-primary-50 whitespace-nowrap"
        numberOfLines={1}
      >
        {label}
      </Text>
    )}
  </View>
);

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          height: 75,
          borderTopColor: colors.gray[200],
          paddingHorizontal: 10,
          paddingVertical: 10,
          bottom: 25,
          left: 10,
          right: 10,
          borderRadius: 1000,
          elevation: 3,
          shadowColor: 'gray',
          shadowOpacity: 0.3,
          shadowRadius: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={HomeIcon} label="Ínicio" />
          ),
        }}
      />
      <Tabs.Screen
        name="publication"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={ImagesIcon} label="Story" />
          ),
        }}
      />
      <Tabs.Screen
        name="scheduling"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={CalendarDaysIcon}
              label="Eventos"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={UserRoundIcon} label="Perfil" />
          ),
        }}
      />
    </Tabs>
  );
}
