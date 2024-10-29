import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface DividerProps extends React.ComponentPropsWithoutRef<typeof View> {
  orientation?: 'horizontal' | 'vertical';
}

export function Divider({
  orientation = 'horizontal',
  ...props
}: DividerProps) {
  return (
    <View
      className={twMerge(
        'shrink-0 bg-gray-300 ',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        props?.className
      )}
      {...props}
    />
  );
}
