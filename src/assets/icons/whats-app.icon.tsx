import { IconProps } from '@/@types/icons.type';
import * as React from 'react';
import { Path, Svg } from 'react-native-svg';

export default function WhatsAppIcon({ size , color}: IconProps) {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      viewBox="0 0 48 48"
      fill="none"
    >
      <Path
        d="M0 48l3.374-12.326A23.734 23.734 0 01.2 23.782C.206 10.67 10.876 0 23.986 0c6.362.002 12.334 2.48 16.826 6.976a23.648 23.648 0 016.96 16.828c-.006 13.114-10.676 23.784-23.786 23.784a23.8 23.8 0 01-11.376-2.896L0 48zm13.194-7.614c3.352 1.99 6.552 3.182 10.784 3.184 10.896 0 19.772-8.868 19.778-19.77.004-10.924-8.83-19.78-19.762-19.784-10.904 0-19.774 8.868-19.778 19.768-.002 4.45 1.302 7.782 3.492 11.268L5.71 42.348l7.484-1.962zm22.774-10.928c-.148-.248-.544-.396-1.14-.694-.594-.298-3.516-1.736-4.062-1.934-.544-.198-.94-.298-1.338.298-.396.594-1.536 1.934-1.882 2.33-.346.396-.694.446-1.288.148-.594-.298-2.51-.924-4.78-2.95-1.766-1.576-2.96-3.522-3.306-4.118-.346-.594-.036-.916.26-1.212.268-.266.594-.694.892-1.042.302-.344.4-.592.6-.99.198-.396.1-.744-.05-1.042-.15-.296-1.338-3.222-1.832-4.412-.484-1.158-.974-1.002-1.338-1.02l-1.14-.02c-.396 0-1.04.148-1.584.744s-2.08 2.032-2.08 4.958 2.13 5.752 2.426 6.148c.298.396 4.19 6.4 10.152 8.974 1.418.612 2.526.978 3.388 1.252 1.424.452 2.72.388 3.744.236 1.142-.17 3.516-1.438 4.012-2.826.496-1.39.496-2.58.346-2.828z"
        fill={color || "#25D366"}
      />
    </Svg>
  );
}