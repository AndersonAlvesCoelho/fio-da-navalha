import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ReactElement, ReactNode, cloneElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const buttonVariants = cva(
  'flex flex-row items-center justify-center rounded-lg py-3 px-4 gap-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-500',
        secondary: 'bg-transparent border border-primary-500',
        destructive: 'bg-red-500',
        success: 'bg-green-300',
        link: 'bg-transparent p-0 ',
        disabled: 'bg-primary-500/75',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface ButtonRoot
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  disabled?: boolean;
}

export function ButtonRoot({
  variant,
  className,
  children,
  disabled = false,
  ...props
}: ButtonRoot) {
  return (
    <TouchableOpacity
      className={cn(
        buttonVariants({
          variant: disabled ? 'disabled' : variant,
          className,
        })
      )}
      disabled={disabled}
      {...props}
    >
      {React.Children.map(children, (child) =>
        cloneElement(child as ReactElement, { disabled, variant })
      )}
    </TouchableOpacity>
  );
}

const buttonTextVariants = cva('text-center', {
  variants: {
    variant: {
      default: 'text-zinc-50 ',
      secondary: 'text-zinc-950 ',
      destructive: 'text-destructive-foreground',
      link: 'text-blue-500 underline',
      disabled: 'text-zinc-400',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-xl',
    },
    weight: {
      default: 'font-medium',
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    weight: 'default',
  },
});

interface ButtonLabelProps
  extends React.ComponentPropsWithoutRef<typeof Text>,
    VariantProps<typeof buttonTextVariants> {
  label: string;
  labelClasses?: string;
  disabled?: boolean;
}

export function ButtonLabel({
  label,
  labelClasses,
  variant,
  size,
  disabled = false,
  weight = 'bold',
}: ButtonLabelProps) {
  return (
    <Text
      className={cn(
        buttonTextVariants({
          variant: disabled ? 'disabled' : variant,
          size,
          weight,
          className: labelClasses, 
        })
      )}
    >
      {label}
    </Text>
  );
}
