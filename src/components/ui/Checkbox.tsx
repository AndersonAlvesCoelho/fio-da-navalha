import { Controller, useFormContext } from 'react-hook-form';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '@/lib/utils';

interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  name: string; // Nome do campo no formulário
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
  defaultValue?: boolean; // Valor inicial
  requiredError?: string;
}

function Checkbox({
  name,
  label,
  labelClasses,
  checkboxClasses,
  className,
  defaultValue = false,
  requiredError,
  ...props
}: CheckboxProps) {
  const { control } = useFormContext(); // Acessa o form context do React Hook Form

  return (
    <View className={cn('flex flex-col gap-1.5', className)} {...props}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue} // Define o valor inicial
        render={({ field: { value, onChange } }) => (
          <View className="flex flex-row items-center gap-2">
            <TouchableOpacity onPress={() => onChange(!value)}>
              <View
                className={cn(
                  'w-4 h-4 border border-gray-700 rounded bg-background flex justify-center items-center',
                  {
                    'bg-foreground': value,
                  },
                  checkboxClasses
                )}
              >
                {value && <Text className="text-background text-xs">✓</Text>}
              </View>
            </TouchableOpacity>
            {label && (
              <Text className={cn('text-primary', labelClasses)}>{label}</Text>
            )}
          </View>
        )}
      />
      {requiredError && <Text className="text-red-500">{requiredError}</Text>}
    </View>
  );
}

export { Checkbox };

