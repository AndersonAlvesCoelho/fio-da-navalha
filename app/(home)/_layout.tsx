import { Tabs } from 'expo-router';
import React from 'react';

import StoriesCarousel from '@/components/home/StoriesCarousel';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { FAKE_STORIES } from '@/constants/fakes';
import {
  BellIcon,
  CalendarDaysIcon,
  HomeIcon,
  PlusIcon,
  SettingsIcon,
} from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerTitle: () => <StoriesCarousel stories={FAKE_STORIES} />,
          headerStyle: {
            height: 150,
            backgroundColor: 'white',
          },
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ color }) => <CalendarDaysIcon color={color} />,
          headerRight: () => (
            <TouchableOpacity
              // onPress={() => {
              //   router.push('/events/new'); // Altere para sua rota real
              // }}
              className="px-2 py-2 rounded-full border border-amber-300 bg-amber-50 mr-4"
            >
              <PlusIcon
                className="p-2"
                size={24}
                color={Colors[colorScheme ?? 'light'].tint}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ color }) => <BellIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />, // use Lucide ou FontAwesome
        }}
      />
    </Tabs>
  );
}
