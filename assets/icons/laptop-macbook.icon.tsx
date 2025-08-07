import { IconProps } from '@/@types/icons.type';
import * as React from 'react';
import { Path, Rect, Svg } from 'react-native-svg';

export default function LaptopMacBookIcon({ size }: IconProps) {
  return (
    <Svg
      width={size || 20}
      height={size || 20}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M5.333 9a1 1 0 011-1h19.333a1 1 0 011 1v13.667H5.333V9z"
        fill="#3B5998"
      />
      <Rect
        opacity={0.3}
        x={1.33301}
        y={24}
        width={29.3333}
        height={1.33333}
        rx={0.5}
        fill="#3B5998"
      />
    </Svg>
  );
}
