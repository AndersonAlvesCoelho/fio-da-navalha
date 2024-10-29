// components/BaseText.tsx
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { Text } from 'react-native';

import { cn } from '@/lib/utils';

const textVariants = cva('flex font-medium', {
  variants: {
    variant: {
      title: 'text-2xl font-extrabold',
      subtitle: 'text-xl font-semibold',
      body: 'text-base',
      caption: 'text-sm text-gray-500',
      link: 'text-sm text-gray-500',
    },
    color: {
      primary: 'text-blue-600',
      secondary: 'text-green-600',
      error: 'text-red-600',
      default: 'text-black',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
  },
});

interface BaseTextProps
  extends React.ComponentPropsWithoutRef<typeof Text>,
    VariantProps<typeof textVariants> {
  className?: string;
}

const BaseText: React.FC<BaseTextProps> = ({
  children,
  className,
  variant,
  color,
  ...props
}) => {
  return (
    <Text
      className={cn(textVariants({ variant, color }), className)}
      {...props}
    >
      {children}
    </Text>
  );
};

export { BaseText, textVariants };

