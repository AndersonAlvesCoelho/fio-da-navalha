import { colors, fontFamily } from '@/assets/styles/theme';
import { useTheme } from '@/contexts/theme.context';
import { ChevronDownIcon } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { SelectList, SelectListProps } from 'react-native-dropdown-select-list';

interface SelectProps extends SelectListProps {
  data: any;
  label?: string;
  placeholder?: string;
  error?: string;
  setSelected: React.SetStateAction<any>;
}

export function Select({
  label,
  data,
  placeholder,
  setSelected,
  error,
  ...rest
}: SelectProps) {
  const { theme } = useTheme();

  return (
    <View className="gap-4">
      {label && (
        <Text className="font-medium text-base dark:text-white">{label}</Text>
      )}
      <SelectList
        {...rest}
        placeholder={placeholder || 'Escolher situação'}
        save="value"
        setSelected={setSelected}
        inputStyles={{ color: theme ? colors.white : colors.black }}
        fontFamily={fontFamily.regular}
        data={data}
        search={false}
        arrowicon={
          <ChevronDownIcon
            size={20}
            color={theme ? colors.white : colors.black}
          />
        }
        boxStyles={{
          borderRadius: 6,
          borderColor: theme ? colors.gray[1000] : colors.gray[200],
          backgroundColor: theme ? colors.gray[1000] : 'transparent',
        }}
        dropdownStyles={{
          borderWidth: 0,
          marginTop: 4,
        }}
        dropdownItemStyles={{
          borderWidth: 1,
          borderRadius: 6,
          borderColor: theme ? colors.gray[1000] : colors.gray[200],
          marginBottom: 5,
          backgroundColor: theme ? colors.gray[1000] : 'transparent',
          height: 42,
          display: 'flex',
          justifyContent: 'center',
        }}
        dropdownTextStyles={{ color: theme ? colors.white : colors.black }}
      />

      {error && <Text className="text-red-500 dark:text-red-300">{error}</Text>}
    </View>
  );
}
