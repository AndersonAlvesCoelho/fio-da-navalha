import ProfilePlaceholderJPG from '@/assets/images/profile-placeholder.jpg';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import * as ImagePicker from 'expo-image-picker';
import { PencilIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const IMAGE_PROFILE_PLACEHOLDER = Image.resolveAssetSource(
  ProfilePlaceholderJPG
).uri;

export default function EditProfileScreen() {
  const insets = useSafeAreaInsets();
  const [profileImage, setProfileImage] = useState<string | null>(
    'https://i.pravatar.cc/150?img=5'
  );
  const [graduation, setGraduation] = useState<string | number>();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const graduationOptions = [
    { id: 'faixa-branca', name: 'Faixa Branca' },
    { id: 'faixa-azul', name: 'Faixa Azul' },
    { id: 'faixa-roxa', name: 'Faixa Roxa' },
    { id: 'faixa-marrom', name: 'Faixa Marrom' },
    { id: 'faixa-preta', name: 'Faixa Preta' },
  ];

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Foto de Perfil acima das Tabs */}
      <View className="items-center mt-4">
        <View className="relative ">
          <Image
            source={
              profileImage
                ? { uri: profileImage }
                : { uri: IMAGE_PROFILE_PLACEHOLDER }
            }
            className="w-24 h-24 rounded-full"
          />
          <TouchableOpacity
            className="absolute bottom-0 right-0 bg-black bg-opacity-60 rounded-full p-1"
            onPress={() => {
              // lógica para editar foto
            }}
          >
            <PencilIcon size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs */}
      <View className="flex-1 px-4 mt-4">
        <Tabs defaultValue="basic">
          <TabsList className="relative rounded-xl bg-slate-100 p-1">
            <TabsTrigger value="basic" title="Dados Básicos" />
            <TabsTrigger value="password" title="Senha" />
          </TabsList>

          {/* Dados Básicos */}
          <TabsContent
            value="basic"
            className="gap-2 border border-slate-100 p-4"
          >
            <Input
              placeholder="Nome"
              label="Seu nome"
              inputClasses="border-2 border-blue-500"
            />

            <Input
              label="E-mail registrado"
              placeholder="Email"
              editable={false}
              inputClasses="border-2 border-blue-500"
            />

            <Input
              keyboardType="numeric"
              placeholder="Data de nascimento"
              label="Data de nascimento"
              inputClasses="border-2 border-blue-500"
            />
            <Select
              label="Graduação"
              options={graduationOptions}
              labelKey="name"
              valueKey="id"
              selectedValue={graduation}
              onSelect={setGraduation}
              placeholder="Selecione sua graduação"
            />

            <Input
              placeholder="Escola de Treinamento"
              label="Escola de Treinamento"
              inputClasses="border-2 border-blue-500"
            />

            <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mt-4">
              <Text className="text-white text-center font-bold">Salvar</Text>
            </TouchableOpacity>
          </TabsContent>

          {/* Alterar Senha */}
          <TabsContent
            value="password"
            className="border border-slate-100 gap-2"
          >
            <Input
              placeholder="********"
              label="Senha atual"
              inputClasses="border-2 border-blue-500"
            />
            <Input
              placeholder="********"
              label="Nova senha"
              inputClasses="border-2 border-blue-500"
            />
            <Input
              placeholder="********"
              label="Confirmar nova senha"
              inputClasses="border-2 border-blue-500"
            />

            <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mt-4">
              <Text className="text-white text-center font-bold">
                Alterar senha
              </Text>
            </TouchableOpacity>
          </TabsContent>
        </Tabs>
      </View>
    </View>
  );
}
