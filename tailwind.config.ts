import type { Config } from 'tailwindcss';
import { colors, fontFamily, fontSize } from './src/assets/styles/theme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: colors,
      fontSize: fontSize,
      fontFamily: fontFamily,
    },
  },
  plugins: [],
} satisfies Config;
