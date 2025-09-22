// OTPInput.tsx
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';

interface OTPInputProps {
  length?: number;
  onCodeChange: (code: string) => void;
  onCodeFilled: (code: string) => void;
}

export default function OTPInput({
  length = 6,
  onCodeChange,
  onCodeFilled,
}: OTPInputProps) {
  const [code, setCode] = useState<string[]>(new Array(length).fill(''));
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const inputRefs = useRef<TextInput[]>([]);

  const handleTextChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);

    const fullCode = newCode.join('');
    if (fullCode.length === length) {
      onCodeFilled(fullCode);
    }
    onCodeChange(fullCode);

    if (text && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    { nativeEvent: { key } }: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-row justify-center gap-2">
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref: TextInput | null) => {
            if (ref) {
              inputRefs.current[index] = ref;
            }
          }}
          className={clsx(
            'w-12 h-12 text-center text-xl font-bold border-2 rounded-xl text-gray-800',
            {
              'border-gray-300': index !== focusedIndex,
              'border-blue-600': index === focusedIndex,
            }
          )}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text: string) => handleTextChange(text, index)}
          onFocus={() => setFocusedIndex(index)}
          onBlur={() => setFocusedIndex(-1)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>
  );
}
