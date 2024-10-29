// IMPORT´S
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import React, { forwardRef, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// UTIL'S and HELPER'S
import { InputType } from '@/@types/inputs.type';
import { changeVariantInput } from '@/helpers/changeVarianteInput';
import { applyMask } from '@/utils/mask';

// STYLES and COMPONENT'S
import { colors } from '@/assets/styles/theme';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';
import { BaseText } from './BaseText';

export const inputVariants = cva(
  'flex flex-col gap-1.5 w-full rounded-md border px-4 py-3',
  {
    variants: {
      variant: {
        default: 'border-primary-500 ',
        error: 'border-red-500',
        success: 'border-green-500',
        disabled: 'border-gray-400 bg-gray-200',
      },
      size: {
        default: 'h-12 ',
        sm: 'h-8',
        lg: 'h-16',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Input = forwardRef<React.ElementRef<typeof TextInput>, InputType>(
  (
    {
      className,
      label,
      mask,
      inputClasses,
      labelClasses,
      name,
      type,
      required = true,
      requiredError = '',
      disabled = false,
      variant,
      ...props
    },
    ref
  ) => {
    const { control } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);

    return (
      <View className={cn('flex flex-col gap-1.5', className)}>
        {label && (
          <BaseText variant="caption">
            {label}{' '}
            <Text
              className={cn('font-medium text-base text-red-500', labelClasses)}
            >
              *
            </Text>
          </BaseText>
        )}

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="relative flex flex-col gap-2">
              <TextInput
                ref={ref}
                secureTextEntry={type === 'password' && !showPassword}
                value={mask ? applyMask(value, mask) : value}
                onChangeText={(text) => {
                  const maskedValue = mask ? applyMask(text, mask) : text;
                  onChange(maskedValue);
                }}
                onBlur={onBlur}
                editable={!disabled}
                className={cn(
                  inputVariants({
                    variant: changeVariantInput(value, requiredError, disabled),
                    className: labelClasses,
                  })
                )}
                {...props}
              />
              {type === 'password' && (
                <TouchableOpacity
                  className="absolute self-end pt-2 pr-4"
                  onPress={() => setShowPassword(!showPassword)}
                  disabled={disabled}
                >
                  {showPassword ? (
                    <EyeIcon color={colors.primary[500]} size={24} />
                  ) : (
                    <EyeOffIcon color={colors.primary[500]} size={24} />
                  )}
                </TouchableOpacity>
              )}
            </View>
          )}
        />

        {requiredError && <Text className="text-red-500">{requiredError}</Text>}
      </View>
    );
  }
);

export { Input };
