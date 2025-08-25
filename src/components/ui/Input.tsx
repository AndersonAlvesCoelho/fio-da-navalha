import { cn } from '@/lib/utils';
import { forwardRef, ReactNode } from 'react';
import { Text, TextInput, View } from 'react-native';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      className,
      label,
      labelClasses,
      inputClasses,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => (
    <View className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <Text className={cn('text-sm text-gray-500', labelClasses)}>
          {label}
        </Text>
      )}

      <View
        className={cn(
          'flex-row items-center bg-white rounded-lg border border-input',
          inputClasses
        )}
      >
        {/* Ícone à esquerda */}
        {leftIcon && <View className="absolute left-3">{leftIcon}</View>}

        <TextInput
          ref={ref}
          className={cn(
            ' py-2.5 rounded-lg w-full',
            leftIcon ? 'pl-10' : 'px-4', // se tem ícone à esquerda, adiciona padding
            rightIcon ? 'pr-10' : '',
            inputClasses
          )}
          {...props}
        />

        {/* Ícone à direita */}
        {rightIcon && <View className="absolute right-3">{rightIcon}</View>}
      </View>
    </View>
  )
);

export { Input };
