import { InputSearchType } from '@/@types/inputs.type';
import { colors } from '@/assets/styles/theme';
import { cn } from '@/lib/utils';
import { filterDataByText } from '@/utils/filterData';
import { cva } from 'class-variance-authority';
import { SearchIcon } from 'lucide-react-native';
import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { BaseText } from '../ui/BaseText';

export const inputSearchVariants = cva(
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

const InputSearch = forwardRef<
  React.ElementRef<typeof TextInput>,
  InputSearchType<any>
>(
  (
    {
      className,
      label,
      inputClasses,
      labelClasses,
      variant,
      data,
      searchKeys,
      setValue,
      value,
      setFilteredData,
      ...props
    },
    ref
  ) => {
    function handleSearchChange(text: string) {
      setValue(text);

      const filtered = filterDataByText(data, text, searchKeys);
      setFilteredData(filtered);
    }

    return (
      <View className={cn('flex flex-col gap-1.5', className)}>
        {label && <BaseText variant="caption">{label}</BaseText>}

        <View className="relative flex flex-col gap-2 ">
          <TextInput
            ref={ref}
            onChangeText={handleSearchChange}
            value={value}
            className={cn(
              inputSearchVariants({
                variant,
                className: labelClasses,
              })
            )}
            {...props}
          />
          <View className="absolute self-end pt-2 pr-4">
            <SearchIcon color={colors.primary[500]} size={24} />
          </View>
        </View>
      </View>
    );
  }
);

export { InputSearch };

