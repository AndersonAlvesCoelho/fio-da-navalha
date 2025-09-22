import { Input } from '@/components/ui/Input';
import OTPInput from '@/components/ui/OTPInput';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ChangeEmailScreen() {
  const [step, setStep] = useState<'sendCode' | 'verifyCode' | 'changeEmail'>(
    'sendCode'
  );
  const [currentEmail, setCurrentEmail] = useState('anderson@email.com');
  const [verificationCode, setVerificationCode] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [confirmCode, setConfirmCode] = useState('');

  const handleSendCode = () => {
    // Aqui enviaria o código para o e-mail atual
    setStep('verifyCode');
  };

  const handleVerifyCode = () => {
    // Aqui validaria o código enviado para o e-mail atual
    setStep('changeEmail');
  };

  const handleConfirmChange = () => {
    // Validar código e atualizar email
    console.log('Email alterado para:', newEmail);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      className="gap-6 bg-white flex-1"
    >
      {/* Etapa 1: Enviar código */}
      {step === 'sendCode' && (
        <View className="gap-4">
          <Text className="text-lg font-semibold text-gray-700">
            Alterar e-mail
          </Text>
          <Input
            label="E-mail atual"
            value={currentEmail}
            placeholder="Seu e-mail atual"
            editable={false}
          />
          <TouchableOpacity
            className="bg-blue-600 p-4 rounded-2xl mt-4"
            onPress={handleSendCode}
          >
            <Text className="text-white text-center font-semibold text-base">
              Enviar código de verificação
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Etapa 2: Confirmar código do e-mail atual */}
      {step === 'verifyCode' && (
        <View className="gap-4">
          <Text className="text-lg font-semibold text-gray-700">
            Confirme o código
          </Text>

          <OTPInput
            length={6}
            onCodeChange={setVerificationCode}
            onCodeFilled={handleVerifyCode}
          />
          <TouchableOpacity
            className="bg-blue-600 p-4 rounded-2xl mt-4"
            onPress={handleVerifyCode}
          >
            <Text className="text-white text-center font-semibold text-base">
              Confirmar código
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Etapa 3: Alterar e confirmar novo e-mail */}
      {step === 'changeEmail' && (
        <View className="gap-4">
          <Text className="text-lg font-semibold text-gray-700">
            Alterar e-mail
          </Text>

          <Input
            label="Novo e-mail"
            placeholder="Digite o novo e-mail"
            value={newEmail}
            onChangeText={setNewEmail}
          />

          <Input
            label="Código de confirmação do novo e-mail"
            placeholder="Digite o código enviado para o novo e-mail"
            value={confirmCode}
            onChangeText={setConfirmCode}
            keyboardType="numeric"
          />

          <TouchableOpacity
            className="bg-green-600 p-4 rounded-2xl mt-4"
            onPress={handleConfirmChange}
          >
            <Text className="text-white text-center font-semibold text-base">
              Confirmar alteração
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
