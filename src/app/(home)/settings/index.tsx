import PaymentBottomSheet from '@/components/settings/payments/PaymentBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import {
  BadgeQuestionMarkIcon,
  BellIcon,
  ChevronRightIcon,
  DollarSignIcon,
  FileStackIcon,
  FileTextIcon,
  LogOutIcon,
  MoonIcon,
  UserIcon,
  UsersIcon,
} from 'lucide-react-native';
import { useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const insets = useSafeAreaInsets();

  
  return (
    <GestureHandlerRootView >
      <View className="flex-1 bg-slate-100" >
        
        {/* Card de perfil */}
        <View className="overflow-hidden rounded-b-3xl bg-white relative shadow-lg" style={{ paddingTop: insets.top }}>
          <View className="px-4 py-6">
            <View className="flex-row items-center justify-between">
              <TouchableOpacity
                className="flex-row items-center gap-3"
                onPress={() => router.push('/settings/profile')}
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

        <ScrollView className="flex-1 px-4 py-6">
          {/* Conta */}
          <View className="mb-8">
            <Text className="text-gray-500 text-sm mb-2">Conta</Text>
            <TouchableOpacity
              className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-3"
              onPress={() => router.push('/settings/profile')}
            >
              <View className="flex-row items-center gap-4">
                <UserIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">Minha Conta</Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Preferências */}
          <View className="mb-8">
            <Text className="text-gray-500 text-sm mb-2">Preferências</Text>
            <View className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-3">
              <View className="flex-row items-center gap-4">
                <BellIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">Notificações</Text>
              </View>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
              />
            </View>
            <View className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <View className="flex-row items-center gap-4">
                <MoonIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">Modo Escuro</Text>
              </View>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>
          </View>

          {/* Gestão */}
          <View className="mb-8">
            <Text className="text-gray-500 text-sm mb-2">Professor</Text>
            <TouchableOpacity
              className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-3"
              onPress={() => router.push('/settings/my-students')}
            >
              <View className="flex-row items-center gap-4">
                <UsersIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">Usuários</Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <View className="flex-row items-center gap-4">
                <DollarSignIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">Financeiro</Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Financeiro */}
          <View className="mb-8">
            <Text className="text-gray-500 text-sm mb-2">Financeiro</Text>
            <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-3">
              <View className="flex-row items-center gap-4">
                <FileStackIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">
                  Resumo Financeiro
                </Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm"
              onPress={() => bottomSheetRef.current?.expand()}
            >
              <View className="flex-row items-center gap-4">
                <DollarSignIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">
                  Pagar Mensalidade
                </Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Outros */}
          <View className="mb-8">
            <Text className="text-gray-500 text-sm mb-2">Outros</Text>
            <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-3">
              <View className="flex-row items-center gap-4">
                <FileTextIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">
                  Termos e Política
                </Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm mb-3">
              <View className="flex-row items-center gap-4">
                <BadgeQuestionMarkIcon color="#6B7280" size={20} />
                <Text className="text-gray-700 text-base">Sobre o app</Text>
              </View>
              <ChevronRightIcon size={18} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          <View className="mb-8">
            <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <View className="flex-row items-center gap-4">
                <LogOutIcon color="#EF4444" size={20} />
                <Text className="text-red-500 text-base">Sair da conta</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <PaymentBottomSheet
        onClose={() => bottomSheetRef.current?.close()}
        bottomSheetRef={bottomSheetRef}
      />
    </GestureHandlerRootView>
  );
}
