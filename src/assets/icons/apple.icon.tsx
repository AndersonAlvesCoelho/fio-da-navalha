import { IconProps } from '@/@types/icons.type';
import * as React from 'react';
import { G, Mask, Path, Svg } from 'react-native-svg';

export default function AppleIcon({ size, color }: IconProps) {
  return (
    <Svg width={size || 20} height={size || 20} viewBox="0 0 13 13" fill="none">
      <Mask
        id="a"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={11}
        height={13}
      >
        <Path
          d="M8.886.12C8.861.093 7.942.133 7.143 1c-.8.867-.677 1.861-.659 1.887.018.025 1.14.065 1.856-.944C9.057.935 8.912.15 8.886.121zm2.486 8.8c-.036-.071-1.744-.925-1.585-2.566.16-1.642 1.256-2.092 1.274-2.14.017-.05-.448-.593-.94-.868a2.77 2.77 0 00-1.173-.326c-.081-.002-.362-.07-.94.087-.382.105-1.24.442-1.477.456-.237.013-.942-.392-1.7-.5-.485-.093-1 .1-1.368.247-.367.147-1.066.565-1.555 1.678-.49 1.111-.234 2.872-.05 3.42.182.546.468 1.443.954 2.097.432.738 1.005 1.25 1.244 1.424.24.174.915.29 1.383.05.376-.23 1.056-.364 1.324-.354.268.01.796.116 1.337.404.428.148.833.087 1.239-.078.405-.166.993-.795 1.678-2.069.26-.592.379-.913.355-.961z"
          fill={color || '#000'}
        />
        <Path
          d="M8.886.12C8.861.093 7.942.133 7.143 1c-.8.867-.677 1.861-.659 1.887.018.025 1.14.065 1.856-.944C9.057.935 8.912.15 8.886.121zm2.486 8.8c-.036-.071-1.744-.925-1.585-2.566.16-1.642 1.256-2.092 1.274-2.14.017-.05-.448-.593-.94-.868a2.77 2.77 0 00-1.173-.326c-.081-.002-.362-.07-.94.087-.382.105-1.24.442-1.477.456-.237.013-.942-.392-1.7-.5-.485-.093-1 .1-1.368.247-.367.147-1.066.565-1.555 1.678-.49 1.111-.234 2.872-.05 3.42.182.546.468 1.443.954 2.097.432.738 1.005 1.25 1.244 1.424.24.174.915.29 1.383.05.376-.23 1.056-.364 1.324-.354.268.01.796.116 1.337.404.428.148.833.087 1.239-.078.405-.166.993-.795 1.678-2.069.26-.592.379-.913.355-.961z"
          fill={color || '#000'}
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill={color || '#000'}
          d="M0.500977 0.11499H12.500977V12.11499H0.500977z"
        />
      </G>
    </Svg>
  );
}