// IMPORT'S
import { VariantProps } from 'class-variance-authority';
import { TextInput } from 'react-native';

// HELPER'S
import { inputSearchVariants } from '@/components/app/inputSearch';
import { inputVariants } from '@/components/ui/Input';

export interface InputType
  extends React.ComponentPropsWithoutRef<typeof TextInput>,
    VariantProps<typeof inputVariants> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  name: string;
  type?: 'password' | 'text';
  requiredError?: string;
  required?: boolean;
  disabled?: boolean;
  mask?: string;
}

export interface InputSearchType<T>
  extends React.ComponentPropsWithoutRef<typeof TextInput>,
    VariantProps<typeof inputSearchVariants> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
  data: T[];
  searchKeys: (keyof T)[];
  setFilteredData: (filteredData: T[]) => void;
  setValue: (text: string) => void;
  value: string;
}
