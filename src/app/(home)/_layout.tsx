import { Tabs } from 'expo-router';
import React from 'react';

import { colors } from '@/assets/styles/theme';
import NotificationIconWithBadge from '@/components/tabs/NotificationIconWithBadge';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

//COMPONENTS
import BackButton from '@/components/header/BackButton';
import HeaderEvents from '@/components/header/Events';
import HeaderHome from '@/components/header/Home';
import HeaderNotifications from '@/components/header/Notifications';
import IconWithBottomIndicator from '@/components/tabs/IconWithBottomIndicator';
import { CalendarDaysIcon, HomeIcon, User2Icon } from 'lucide-react-native';

export default function TabLayout() {
  const hasNotifications = true;

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary['500'],
        tabBarInactiveTintColor: colors.gray['300'],
        headerShown: useClientOnlyValue(false, true),
        tabBarStyle: {
          position: 'absolute',
          paddingTop: 5,
          backgroundColor: colors.white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          overflow: 'hidden',
          borderTopWidth: 1,
          borderTopColor: '#ddd',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -3 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <IconWithBottomIndicator focused={focused} Icon={HomeIcon} />
          ),
          header: () => <HeaderHome />,
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: 'Eventos',
          tabBarIcon: ({ focused }) => (
            <IconWithBottomIndicator
              focused={focused}
              Icon={CalendarDaysIcon}
            />
          ),
          header: () => <HeaderEvents />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          tabBarIcon: ({ focused }) => (
            <NotificationIconWithBadge
              focused={focused}
              hasNotifications={hasNotifications}
            />
          ),
          header: () => <HeaderNotifications />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          headerLeft: () => <BackButton color="#2563EB" size={28} />,
          tabBarIcon: ({ focused }) => (
            <IconWithBottomIndicator focused={focused} Icon={User2Icon} />
          ),
        }}
      />
    </Tabs>
  );
}
