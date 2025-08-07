import PaymentBottomSheet from '@/components/settings/payments/PaymentBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import {
  BellIcon,
  DollarSignIcon,
  FileTextIcon,
  LogOutIcon,
  MoonIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react-native';
import { useRef, useState } from 'react';
import { ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function SettingsScreen() {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView className="flex-1">
      <ScrollView className="flex-1 bg-white p-4">
        {/* Conta */}
        <TouchableOpacity
          className="flex-row items-center justify-between py-4 border-b border-gray-200"
          onPress={() => router.push('/settings/profile')}
        >
          <View className="flex-row gap-4 items-center space-x-3">
            <UserIcon color="#6B7280" size={20} />
            <Text className="text-gray-700 text-base">Minha Conta</Text>
          </View>
        </TouchableOpacity>

        {/* Notificações */}
        <View className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row gap-4 items-center space-x-3">
            <BellIcon color="#6B7280" size={20} />
            <Text className="text-gray-700 text-base">Notificações</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        {/* Tema escuro */}
        <View className="flex-row items-center justify-between py-4 border-b border-gray-200">
          <View className="flex-row gap-4 items-center space-x-3">
            <MoonIcon color="#6B7280" size={20} />
            <Text className="text-gray-700 text-base">Modo Escuro</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <TouchableOpacity
          className="flex-row items-center justify-between py-4 border-b border-gray-200"
          onPress={() => router.push('/settings/my-students')}
        >
          <View className="flex-row gap-4 items-center space-x-3">
            <UsersIcon color="#6B7280" size={20} />
            <Text className="text-gray-700 text-base">Meu Alunos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-between py-4 border-b border-gray-200"
          onPress={() => bottomSheetRef.current?.expand()}
        >
          <View className="flex-row gap-4 items-center space-x-3">
            <DollarSignIcon color="#6B7280" size={20} />
            <Text className="text-gray-700 text-base">Pagar Mensalidade</Text>
          </View>
        </TouchableOpacity>

        {/* Termos de uso */}
        <TouchableOpacity
          className="flex-row items-center justify-between py-4 border-b border-gray-200"
          // onPress={() => router.push('/terms')}
        >
          <View className="flex-row gap-4 items-center space-x-3">
            <FileTextIcon color="#6B7280" size={20} />
            <Text className="text-gray-700 text-base">Termos e Política</Text>
          </View>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity
          className="flex-row items-center justify-between py-4 mt-6"
          onPress={() => {
            // lógica de logout
          }}
        >
          <View className="flex-row gap-4 items-center space-x-3">
            <LogOutIcon color="#EF4444" size={20} />
            <Text className="text-red-500 text-base">Sair da conta</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <PaymentBottomSheet
        onClose={() => {
          bottomSheetRef.current?.close();
        }}
        bottomSheetRef={bottomSheetRef}
      />
    </GestureHandlerRootView>
  );
}
