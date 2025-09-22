import { colors } from '@/assets/styles/theme';
import { Input } from '@/components/ui/Input';
import OTPInput from '@/components/ui/OTPInput';
import { EyeIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function ChangePasswordScreen() {
  const [step, setStep] = useState<
    'confirmPassword' | 'verifyCode' | 'changePassword'
  >('confirmPassword');

  const [currentPassword, setCurrentPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  // Estados para controlar a visibilidade das senhas
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] =
    useState(false);
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const handleConfirmPassword = () => {
    if (currentPassword.length > 0) {
      console.log('Senha antiga verificada. Código de verificação enviado.');
      setStep('verifyCode');
    } else {
      console.log('Por favor, insira a senha atual.');
    }
  };

  const handleVerifyCode = () => {
    console.log('Código de verificação validado.');
    setStep('changePassword');
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmNewPassword) {
      console.log('Erro: As novas senhas não correspondem.');
      return;
    }
    if (newPassword.length < 6) {
      console.log('Erro: A nova senha deve ter pelo menos 6 caracteres.');
      return;
    }
    console.log('Senha alterada para:', newPassword);
  };

  return (
    <ScrollView
      contentContainerStyle={{ padding: 16 }}
      className="gap-6 bg-white flex-1"
    >
      {/* Etapa 1: Confirmar senha antiga */}
      {step === 'confirmPassword' && (
        <View className="gap-4">
          <Text className="text-lg font-semibold text-gray-700">
            Confirme sua senha atual
          </Text>
          <Input
            label="Senha atual"
            placeholder="Digite sua senha atual"
            value={currentPassword}
            onChangeText={setCurrentPassword}
            // Propriedade que esconde/mostra a senha
            secureTextEntry={!isCurrentPasswordVisible}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setIsCurrentPasswordVisible(!isCurrentPasswordVisible)
                }
              >
                <EyeIcon size={18} color={colors.gray[500]} />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            className="bg-blue-600 p-4 rounded-2xl mt-4"
            onPress={handleConfirmPassword}
          >
            <Text className="text-white text-center font-semibold text-base">
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Etapa 2: Confirmar código de verificação */}
      {step === 'verifyCode' && (
        <View className="gap-4">
          <Text className="text-lg font-semibold text-gray-700">
            Confirme o código
          </Text>
          <Text className="text-sm text-gray-500 mt-2">
            Um código de verificação foi enviado para o seu e-mail cadastrado.
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

      {/* Etapa 3: Alterar a senha */}
      {step === 'changePassword' && (
        <View className="gap-4">
          <Text className="text-lg font-semibold text-gray-700">
            Alterar senha
          </Text>
          <Input
            label="Nova senha"
            placeholder="Digite a nova senha"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={!isNewPasswordVisible}
            rightIcon={
              <TouchableOpacity
                onPress={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
              >
                <EyeIcon size={18} color={colors.gray[500]} />
              </TouchableOpacity>
            }
          />
          <Input
            label="Confirme a nova senha"
            placeholder="Confirme a nova senha"
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
            secureTextEntry={!isConfirmPasswordVisible}
            rightIcon={
              <TouchableOpacity
                onPress={() =>
                  setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                }
              >
                <EyeIcon size={18} color={colors.gray[500]} />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            className="bg-green-600 p-4 rounded-2xl mt-4"
            onPress={handleUpdatePassword}
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
