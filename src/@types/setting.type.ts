import { icons } from 'lucide-react-native';

export interface SettingProps {
  name: string;
  router: string | null;
  label: string;
  type: 'router' | 'action';
  action: () => void;
  icon: keyof typeof icons;
}
