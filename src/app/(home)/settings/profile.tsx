import { PencilIcon } from 'lucide-react-native';
import React from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fakePosts = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  image: `https://picsum.photos/800/600?random=${i + 1}`,
}));

// Exemplo de props que poderia vir do usuário real:
const isAluno = true; // false para convidado
const graduacoes = ['Faixa Roxa', 'Faixa Verde']; // exemplo
const escola = 'Escola XYZ';
const aulasPraticadas = 35;

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="items-center mb-6 px-4">
        <View className="relative">
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
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

        <Text className="text-lg font-semibold mt-3">@seu_usuario</Text>
        <Text className="text-sm text-gray-500 mt-1">12 posts</Text>

        {/* Graduação / Escola */}
        <View className="flex-row items-center space-x-3 mt-4">
          {isAluno ? (
            <>
              {graduacoes.map((faixa, idx) => (
                <View
                  key={idx}
                  className="px-3 py-1 bg-purple-600 rounded-full"
                >
                  <Text className="text-white text-xs">{faixa}</Text>
                </View>
              ))}
            </>
          ) : (
            <View className="px-3 py-1 bg-gray-300 rounded-full">
              <Text className="text-gray-700 text-xs">{escola}</Text>
            </View>
          )}
        </View>

        {/* Aulas praticadas */}
        <Text className="text-gray-600 text-sm mt-3">
          Aulas praticadas: <Text className="font-semibold">{aulasPraticadas}</Text>
        </Text>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={fakePosts}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="w-1/3 aspect-square p-[1px]">
            <Image source={{ uri: item.image }} className="w-full h-full" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
