import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fakePosts = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i),
  image: `https://picsum.photos/800/600?random=${i + 1}`,
}));

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="items-center mb-4">
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=5' }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="text-lg font-semibold mt-2">@seu_usuario</Text>
        <Text className="text-sm text-gray-500">12 posts</Text>
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
