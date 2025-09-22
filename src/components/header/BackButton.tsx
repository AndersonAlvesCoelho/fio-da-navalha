import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

type BackButtonProps = {
  color?: string;
  size?: number;
  style?: ViewStyle;
};

export default function BackButton({
  color = '#111827',
  size = 24,
  style,
}: BackButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="p-2  mr-2"
      style={style}
      activeOpacity={0.7}
      onPress={() => navigation.goBack()}
    >
      <ChevronLeftIcon color={color} size={size} />
    </TouchableOpacity>
  );
}
