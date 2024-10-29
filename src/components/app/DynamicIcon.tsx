import { DynamicIconProps } from '@/@types/icons.type';
import { icons } from 'lucide-react-native';

function DynamicIcon({ name, color = 'black', size = 24 }: DynamicIconProps) {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
}

export default DynamicIcon;
