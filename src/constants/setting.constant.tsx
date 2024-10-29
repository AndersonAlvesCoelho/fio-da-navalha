import { SettingProps } from '@/@types/setting.type';

export const SETTINGS_CONSTANT: SettingProps[] = [
  {
    name: 'profile',
    router: '/profile',
    label: 'Profile',
    type: 'router',
    action: () => {},
    icon: 'User',
  },
  {
    name: 'yourData',
    router: '/your-data',
    label: 'Your Data',
    type: 'router',
    action: () => {},
    icon: 'GalleryVerticalEnd',
  },
  {
    name: 'settings',
    router: '/settings',
    label: 'Settings',
    type: 'router',
    action: () => {},
    icon: 'Settings',
  },
  {
    name: 'notifications',
    router: '/notifications',
    label: 'Notifications',
    type: 'router',
    action: () => {},
    icon: 'Bell',
  },
  {
    name: 'help',
    router: '/help',
    label: 'Help',
    type: 'router',
    action: () => {},
    icon: 'CircleHelp',
  },
  {
    name: 'privacyAndSecurity',
    router: '/privacy-security',
    label: 'Privacy & Security',
    type: 'router',
    action: () => {},
    icon: 'Handshake',
  },
  {
    name: 'logout',
    router: null,
    label: 'Log out',
    type: 'action',
    action: () => {
      console.log('Logout user');
    },
    icon: 'LogOut',
  },
];
''