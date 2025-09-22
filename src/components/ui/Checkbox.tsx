import { cn } from '@/lib/utils'
import { Text, TouchableOpacity, View } from 'react-native'

interface CheckboxProps {
  value: boolean
  onChange: (checked: boolean) => void
  label?: string
  labelClasses?: string
  checkboxClasses?: string
  className?: string
}

function Checkbox({
  value,
  onChange,
  label,
  labelClasses,
  checkboxClasses,
  className,
}: CheckboxProps) {
  return (
    <View className={cn('flex-row items-center gap-2', className)}>
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
      {label && <Text className={cn('text-primary', labelClasses)}>{label}</Text>}
    </View>
  )
}

export { Checkbox }
