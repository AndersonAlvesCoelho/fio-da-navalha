import { cn } from '@/lib/utils';
import { LoaderCircleIcon } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';

interface LoadingProps {
  size?: number;
  className?: string;
  color?: string;
}

export function Loading({ size = 48, className, color = 'red' }: LoadingProps) {
  return (
    <View className={cn(' animate-spin', className)}>
      <LoaderCircleIcon color={color} size={size} />
    </View>
  );
}
