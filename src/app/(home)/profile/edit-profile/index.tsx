import ProfilePlaceholderJPG from '@/assets/images/profile-placeholder.jpg';
import { colors } from '@/assets/styles/theme';
import { Input } from '@/components/ui/Input';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { ChevronRight, SquarePenIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IMAGE_PROFILE_PLACEHOLDER = Image.resolveAssetSource(
  ProfilePlaceholderJPG
).uri;

export default function EditProfileScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [profileImage, setProfileImage] = useState<string | null>(
    'https://i.pravatar.cc/150?img=12'
  );

  const MAX_VISIBLE = 3;
  const graduations = [
    { name: 'Judo - II', color: 'green' },
    { name: 'Karate - V', color: 'blue' },
    { name: 'Capoeira - V', color: 'orange' },
    { name: 'Muay Thai - III', color: 'red' },
  ];

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date('1996-08-15T00:00:00Z'));

  // Função para lidar com a mudança de data
  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Fecha o seletor no Android
    setDate(currentDate);
  };

  // Função para formatar a data para exibição no Input
  const formatDate = (dateToFormat: Date) => {
    const day = dateToFormat.getDate().toString().padStart(2, '0');
    const month = (dateToFormat.getMonth() + 1).toString().padStart(2, '0');
    const year = dateToFormat.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.canceled) setProfileImage(result.assets[0].uri);
  };

  const renderGraduations = () => {
    const visible = graduations.slice(0, MAX_VISIBLE);
    const hiddenCount = graduations.length - MAX_VISIBLE;

    return (
      <View className="flex-row flex-1 flex-wrap gap-2">
        {visible.map((grad, index) => (
          <View
            key={index}
            className={`px-3 py-1.5 rounded-full bg-${grad.color}-100`}
          >
            <Text className={`text-${grad.color}-700 text-sm`}>
              {grad.name}
            </Text>
          </View>
        ))}
        {hiddenCount > 0 && (
          <View className="bg-gray-200 px-3 py-1.5 rounded-full">
            <Text className="text-gray-700 text-sm">+{hiddenCount}</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      <ScrollView contentContainerStyle={{ padding: 16,  paddingBottom: 80}} className="gap-6">
        {/* Foto de Perfil */}
        <View className="items-center">
          <View className="relative">
            <Image
              source={
                profileImage
                  ? { uri: profileImage }
                  : { uri: IMAGE_PROFILE_PLACEHOLDER }
              }
              className="w-28 h-28 rounded-full"
            />
            <TouchableOpacity
              className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow"
              onPress={pickImage}
            >
              <SquarePenIcon size={18} color={colors.primary[900]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Campos */}
        <View className="gap-4">
          <Input
            label="Nome"
            value="Anderson Alves"
            placeholder="Digite seu nome"
          />

          <Input label="Apelido" placeholder="Digite seu apelido" />

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              router.push('/(home)/profile/edit-profile/change-email')
            }
          >
            <Input
              label="E-mail"
              value="anderson@email.com"
              placeholder="Clique para alterar o e-mail"
              editable={false}
              rightIcon={<ChevronRight size={18} color={colors.gray[500]} />}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              router.push('/(home)/profile/edit-profile/change-password')
            }
          >
            <Input
              label="Senha"
              value="********"
              placeholder="Clique para alterar a senha"
              editable={false}
              rightIcon={<ChevronRight size={18} color={colors.gray[500]} />}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Input
              label="Data de nascimento"
              value={formatDate(date)}
              placeholder="DD/MM/AAAA"
              editable={false} // Desabilita a edição manual
            />
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="calendar" // Estilo do seletor (iOS/Android)
              onChange={handleDateChange}
              maximumDate={new Date()} // Impede seleção de datas futuras
            />
          )}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              router.push('/(home)/profile/edit-profile/change-graduations')
            }
          >
            <View className="flex flex-col gap-1.5">
              <Text className="text-sm text-gray-500">Graduação</Text>
              <View className="flex-row items-center justify-between rounded-xl border border-gray-200 px-3 py-2.5">
                {renderGraduations()}
                <ChevronRight
                  size={18}
                  color={colors.gray[500]}
                  className="ml-2 shrink-0"
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Botão Salvar */}
        <TouchableOpacity className="bg-blue-600 p-4 rounded-2xl mt-6">
          <Text className="text-white text-center font-semibold text-base">
            Salvar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
