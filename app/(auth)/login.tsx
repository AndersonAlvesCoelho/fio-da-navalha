import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar lógica de autenticação
    if (email && password) {
      router.replace('/(home)');
    }
  };

  const handleSocialLogin = () => {
    // Lógica de login social (ex: Firebase Google Sign-In)
    console.log('Login social...');
  };

  return (
    <View className="flex-1 bg-white justify-center px-6">
      <Animated.View entering={FadeIn.duration(400)} className="mb-10">
        <Text className="text-3xl font-bold text-center text-gray-800">Bem-vindo</Text>
        <Text className="text-base text-center text-gray-500">Entre com sua conta</Text>
      </Animated.View>

      {/* Campo de E-mail */}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="border border-gray-300 rounded-lg p-4 mb-4"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Campo de Senha */}
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        className="border border-gray-300 rounded-lg p-4 mb-4"
        secureTextEntry
      />

      {/* Botão de Login */}
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-black rounded-lg py-4 items-center mb-4"
      >
        <Text className="text-white font-semibold">Entrar</Text>
      </TouchableOpacity>

      {/* Separador */}
      <View className="flex-row items-center my-4">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="px-4 text-gray-400 text-sm">ou</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      {/* Login Social */}
      <TouchableOpacity
        onPress={handleSocialLogin}
        className="flex-row items-center justify-center border border-gray-300 rounded-lg py-4"
      >
        <AntDesign name="google" size={20} color="#EA4335" />
        <Text className="ml-2 text-gray-700 font-medium">Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}
