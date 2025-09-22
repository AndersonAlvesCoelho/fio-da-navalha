import { Switch } from '@/components/ui/Switch';
import { useRouter } from 'expo-router';
import {
  BadgeQuestionMarkIcon,
  BellIcon,
  ChevronRightIcon,
  CreditCardIcon,
  FileTextIcon,
  LogOutIcon,
  MoonIcon,
  UserCogIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react-native';
import { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View className="flex-1 bg-slate-100 ">
      {/* Card de perfil */}
      <View
        className="overflow-hidden rounded-b-3xl bg-white relative shadow-lg"
        style={{ paddingTop: insets.top }}
      >
        <View className="px-4 py-6">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              className="flex-row items-center gap-3"
              onPress={() => router.push('/profile/profile')}
            >
              <Image
                source={{ uri: 'https://picsum.photos/800/600?random=11' }}
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <View>
                <Text className="font-semibold text-lg text-gray-900">
                  Anderson Alves
                </Text>
                <View className="flex-row items-center gap-2 mt-2">
                  <View className="w-4 h-4 rounded-full bg-purple-600" />
                  <View className="w-4 h-4 rounded-full bg-green-500" />
                  <Text className="text-xs text-gray-700">Graduações</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 border border-gray-100 rounded-full">
              <BellIcon size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 p-4 pb-25">
        {/* Conta */}
        <View className="gap-2 mb-8">
          <Text className="text-gray-500 text-sm ">Conta</Text>
          <TouchableOpacity
            className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm "
            onPress={() => router.push('/(home)/profile/edit-profile')}
          >
            <View className="flex-row items-center gap-4">
              <UserIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Minha Conta</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm "
            onPress={() => router.push('/(home)/profile/student/payment')}
          >
            <View className="flex-row items-center gap-4">
              <CreditCardIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Financeiro</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Gestão */}
        <View className="gap-2 mb-8">
          <Text className="text-gray-500 text-sm ">Gestão</Text>
          <TouchableOpacity
            className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm "
            onPress={() => router.push('/(home)/profile/teacher/students')}
          >
            <View className="flex-row items-center gap-4">
              <UsersIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Alunos</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm "
            onPress={() =>
              router.push('/(home)/profile/teacher/financial-management')
            }
          >
            <View className="flex-row items-center gap-4">
              <CreditCardIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Gestão Financeira</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            onPress={() => router.push('/(home)/profile/guest')}
          >
            <View className="flex-row items-center gap-4">
              <UserCogIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Convidados</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Preferências */}
        <View className="gap-2 mb-8">
          <Text className="text-gray-500 text-sm ">Preferências</Text>
          <View className="flex-row items-center justify-between bg-white  px-4  rounded-lg shadow-sm ">
            <View className="flex-row items-center gap-4">
              <BellIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Notificações</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          </View>
          <View className="flex-row items-center justify-between bg-white  px-4 rounded-lg shadow-sm">
            <View className="flex-row items-center gap-4">
              <MoonIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Modo Escuro</Text>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        {/* Outros */}
        <View className="gap-2 mb-25">
          <Text className="text-gray-500 text-sm ">Outros</Text>
          <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm ">
            <View className="flex-row items-center gap-4">
              <FileTextIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Termos e Política</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm ">
            <View className="flex-row items-center gap-4">
              <BadgeQuestionMarkIcon color="#6B7280" size={20} />
              <Text className="text-gray-700 text-base">Sobre o app</Text>
            </View>
            <ChevronRightIcon size={18} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
            <View className="flex-row items-center gap-4">
              <LogOutIcon color="#EF4444" size={20} />
              <Text className="text-red-500 text-base">Sair da conta</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
