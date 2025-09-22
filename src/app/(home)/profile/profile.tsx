import PostBottomSheet from '@/components/profile/profile/PostBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from 'expo-router';
import {
    AwardIcon,
    CalendarIcon,
    ImageIcon,
    MessageSquareIcon,
    PencilIcon,
} from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const fakePosts = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  image: `https://picsum.photos/800/600?random=${i + 1}`,
}));

const graduations = [
  {
    id: '1',
    art: 'Capoeira',
    level: 'Corda Branca',
    date: '2018',
    progress: 0,
    color: 'bg-gray-200',
  },
  {
    id: '2',
    art: 'Jiu-Jitsu',
    level: 'Faixa Azul',
    date: '2020',
    progress: 33,
    color: 'bg-blue-500',
  },
  {
    id: '3',
    art: 'Judô',
    level: 'Faixa Roxa',
    date: '2023',
    progress: 66,
    color: 'bg-purple-500',
  },
];

const eventos = [
  {
    id: '1',
    title: 'Campeonato Regional',
    date: '10/10/2025',
    banner: 'https://picsum.photos/800/400?random=50',
  },
  {
    id: '2',
    title: 'Aula Especial com Mestre João',
    date: '05/11/2025',
    banner: 'https://picsum.photos/800/400?random=51',
  },
  {
    id: '3',
    title: 'Seminário de Capoeira',
    date: '20/11/2025',
    banner: 'https://picsum.photos/800/400?random=52',
  },
];

const isOwner = true;
const isProfessor = false;
const userHandle = '@seu_usuario';
const userName = 'Anderson Alves';
const avatarUrl = 'https://i.pravatar.cc/150?img=15';
const badges = ['Faixa Roxa', 'Capoeira'];
const metrics = {
  Posts: 12,
  Seguidores: 120,
  Seguindo: 80,
};

export default function ProfileScreen() {
  const navigation = useNavigation();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [activeTab, setActiveTab] = useState('posts');

  const renderPosts = () => (
    <FlatList
      data={fakePosts}
      numColumns={3}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 80 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="w-1/3 aspect-square p-[1px]"
          onPress={() => bottomSheetRef.current?.snapToIndex(0)}
        >
          <Image source={{ uri: item.image }} className="w-full h-full" />
        </TouchableOpacity>
      )}
    />
  );

  const renderGraduations = () => (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-xl font-semibold mb-4 text-gray-800">
        Graduações
      </Text>
      <FlatList
        data={graduations}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 16, paddingBottom: 80 }}
        renderItem={({ item }) => (
          <View className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
            <View className="flex-row items-center justify-between mb-2">
              <View>
                <Text className="text-base font-semibold text-gray-900">
                  {item.art}
                </Text>
                <Text className="text-sm text-gray-500">
                  {item.level} • {item.date}
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <View className="w-24 h-3 bg-gray-300 rounded-full overflow-hidden">
                  <View
                    className={`${item.color} h-3`}
                    style={{ width: `${item.progress}%` }}
                  />
                </View>
                <Text className="text-xs text-gray-600">{item.progress}%</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );

  const renderEventos = () => (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-semibold mb-4 text-gray-800">
        Eventos Participados
      </Text>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 16, paddingBottom: 80, paddingTop: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Image
              source={{ uri: item.banner }}
              className="w-full h-40"
              resizeMode="cover"
            />
            <View className="p-4">
              <Text className="text-base font-semibold text-gray-900">
                {item.title}
              </Text>
              <Text className="text-sm text-gray-500">{item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-gray-50">
        <View className="w-full relative ">
          <ImageBackground
            source={{ uri: 'https://picsum.photos/1200/700' }}
            className="w-full h-48"
            blurRadius={Platform.OS === 'ios' ? 5 : 2}
          >
            <View className="flex-1 bg-black/20" /> {/* overlay leve */}
          </ImageBackground>

          <View className="absolute left-0.17 -translate-x-1/2 -translate-y-1/2 top-48">
            <View className="relative">
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={{ uri: avatarUrl }}
                  className="w-25 h-25 rounded-2xl border-4 border-white"
                />
              </TouchableOpacity>
              {isOwner && (
                <TouchableOpacity
                  className="absolute bottom-0 right-0 bg-black/60 rounded-full p-2"
                  onPress={() => {}}
                >
                  <PencilIcon size={18} color="white" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View className="w-full py-4 px-6">
            <View className="flex-row gap-4 items-end justify-end">
              <TouchableOpacity className="bg-white px-6 py-2 rounded-lg">
                <Text className="font-semibold text-primary-950">Seguir</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {}}
                className="flex-row items-center justify-between bg-white p-2 rounded-full shadow-sm "
              >
                <MessageSquareIcon color="#6B7280" size={20} />
              </TouchableOpacity>
            </View>

            <View className="">
              <Text className="text-xl font-bold text-black">{userName}</Text>
              <Text className="text-sm text-gray-500">{userHandle}</Text>
            </View>

            <View className="flex-row justify-around items-center mt-4 w-full px-8">
              {Object.entries(metrics).map(([label, value]) => (
                <TouchableOpacity key={label} className="items-center">
                  <Text className="text-black font-bold text-lg">{value}</Text>
                  <Text className="text-gray-500 text-xs">{label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Grid de posts */}

        <View className="flex-row justify-around bg-white rounded-t-2xl border-b border-gray-200">
          <TouchableOpacity
            className={`flex-1 items-center py-3 ${
              activeTab === 'posts' ? 'border-b-2 border-green-600' : ''
            }`}
            onPress={() => setActiveTab('posts')}
          >
            <ImageIcon
              size={20}
              color={activeTab === 'posts' ? '#16a34a' : '#6b7280'}
            />
            <Text
              className={`text-xs mt-1 ${
                activeTab === 'posts'
                  ? 'text-green-600 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Posts
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 items-center py-3 ${
              activeTab === 'graduacoes' ? 'border-b-2 border-green-600' : ''
            }`}
            onPress={() => setActiveTab('graduacoes')}
          >
            <AwardIcon
              size={20}
              color={activeTab === 'graduacoes' ? '#16a34a' : '#6b7280'}
            />
            <Text
              className={`text-xs mt-1 ${
                activeTab === 'graduacoes'
                  ? 'text-green-600 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Graduações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 items-center py-3 ${
              activeTab === 'eventos' ? 'border-b-2 border-green-600' : ''
            }`}
            onPress={() => setActiveTab('eventos')}
          >
            <CalendarIcon
              size={20}
              color={activeTab === 'eventos' ? '#16a34a' : '#6b7280'}
            />
            <Text
              className={`text-xs mt-1 ${
                activeTab === 'eventos'
                  ? 'text-green-600 font-semibold'
                  : 'text-gray-500'
              }`}
            >
              Eventos
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conteúdo da aba */}
        <View className="flex-1 bg-white">
          {activeTab === 'posts' && renderPosts()}
          {activeTab === 'graduacoes' && renderGraduations()}
          {activeTab === 'eventos' && renderEventos()}
        </View>

        <PostBottomSheet
          onClose={() => bottomSheetRef.current?.close()}
          bottomSheetRef={bottomSheetRef}
        />
      </View>
    </GestureHandlerRootView>
  );
}
