import IconComponents from '@/assets/icons';
import { icons } from 'lucide-react-native';
import { ElementType } from 'react';

export interface IconProps {
  color?: string;
  size?: number;
}

export interface DynamicIconProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

export type IconComponentType = ElementType<IconProps>;
export type IconName = keyof typeof IconComponents;
