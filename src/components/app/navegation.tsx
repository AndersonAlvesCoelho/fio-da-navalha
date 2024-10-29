// IMPORT'S
import { colors } from '@/assets/styles/theme';
import { Tabs } from 'expo-router';
import { SearchIcon } from 'lucide-react-native';

export default function NavigationLayout() {
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
          justifyContent: 'space-around',
          borderTopColor: colors.gray[200],
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? colors.primary[500] : colors.gray[500]} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="smart-services"
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? colors.primary[500] : colors.gray[500]} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="accredited"
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? colors.primary[500] : colors.gray[500]} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon color={focused ? colors.primary[500] : colors.gray[500]} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
