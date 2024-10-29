import { View, ViewProps } from 'react-native'
import { tv, VariantProps } from 'tailwind-variants'
import { Loading } from '../ui/Loading'

const loading = tv({
  base: 'h-screen w-screen items-center justify-center bg-white/80 dark:bg-black/80',

  variants: {
    variant: {
      fullscreen: 'absolute z-50',
      withHeader: 'absolute z-50 -mt-36',
    },
  },
  defaultVariants: {
    variant: 'fullscreen',
  },
})

interface Props extends ViewProps, VariantProps<typeof loading> {}

export function LoadingOverlay({ variant, ...props }: Props) {
  return (
    <View className={loading({ variant })} {...props}>
      <Loading />
    </View>
  )
}
