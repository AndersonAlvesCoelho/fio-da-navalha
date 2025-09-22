import { cn } from '@/lib/utils'
import { forwardRef, ReactNode } from 'react'
import { Text, TextInput, View } from 'react-native'

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string
  labelClasses?: string
  inputClasses?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
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
        <Text
          className={cn(
            'text-sm text-gray-400 font-medium',
            labelClasses
          )}
        >
          {label}
        </Text>
      )}

      <View
        className={cn(
          'flex-row items-center  rounded-xl border border-gray-200',
          inputClasses
        )}
      >
        {/* Ícone à esquerda */}
        {leftIcon && <View className="absolute left-3">{leftIcon}</View>}

        <TextInput
          ref={ref}
          className={cn(
            'py-3 rounded-xl w-full text-gray-700 text-base',
            leftIcon ? 'pl-10' : 'px-4',
            rightIcon ? 'pr-10' : '',
            inputClasses
          )}
          placeholderTextColor="#A3A3A3"
          {...props}
        />

        {/* Ícone à direita */}
        {rightIcon && <View className="absolute right-3">{rightIcon}</View>}
      </View>
    </View>
  )
)

export { Input }
