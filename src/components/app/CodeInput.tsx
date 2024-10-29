import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

interface CodeInputProps {
  length?: number;
  onCodeComplete: (code: string) => void;
}

export function CodeInput({ length = 4, onCodeComplete }: CodeInputProps) {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<(TextInput | null)[]>([]);

  function handleInputChange(text: string, index: number) {
    if (text.length > 1) return;

    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (newCode.every((digit) => digit !== '')) {
      onCodeComplete(newCode.join(''));
    }
  }

  function handleBackspace(event: any, index: number) {
    if (event.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  return (
    <View className="flex flex-row justify-center gap-2 mt-5 px-5">
      {code.map((digit, index) => (
        <TextInput
          key={index}
          value={digit}
          onChangeText={(text) => handleInputChange(text, index)}
          onKeyPress={(event) => handleBackspace(event, index)}
          keyboardType="numeric"
          maxLength={1}
          className={cn(
            'w-12 h-12 border border-primary-500 rounded-lg text-center text-lg',
            'focus:border-green-500'
          )}
          ref={(ref) => (inputsRef.current[index] = ref)}
        />
      ))}
    </View>
  );
}
