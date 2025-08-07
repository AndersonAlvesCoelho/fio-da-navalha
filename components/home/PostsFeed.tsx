import { getTimeAgo } from '@/helper/format';
import { Heart, MessageCircle } from 'lucide-react-native';
import { useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

type Post = {
  id: string;
  userName: string;
  location: string;
  avatar: string;
  image: string;
  likes: number;
  comments: number;
  createdAt: string;
};

type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
  const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, 5));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = () => {
    if (loading || !hasMore) return;
    setLoading(true);

    setTimeout(() => {
      const currentLength = visiblePosts.length;
      const nextPosts = posts.slice(currentLength, currentLength + 5);

      setVisiblePosts((prev) => [...prev, ...nextPosts]);
      setHasMore(currentLength + nextPosts.length < posts.length);
      setLoading(false);
    }, 1000); // simula delay de API
  };

  return (
    <FlatList
      data={visiblePosts}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
      onEndReached={loadMorePosts}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        loading ? (
          <View className="py-4">
            <ActivityIndicator size="small" color="#999" />
          </View>
        ) : null
      }
      renderItem={({ item }) => (
        <View className="mb-6 bg-white">
          {/* Header */}
          <View className="flex-row items-center px-4 py-2">
            <Image
              source={{ uri: item.avatar }}
              className="w-10 h-10 rounded-full mr-3"
            />
            <View>
              <Text className="font-semibold text-sm">{item.userName}</Text>
              <Text className="text-xs text-gray-500">
                {item.location} · {getTimeAgo(item.createdAt)}
              </Text>
            </View>
          </View>

          {/* Post Image */}
          <Image
            source={{ uri: item.image }}
            className="w-full h-72"
            resizeMode="cover"
          />

          {/* Actions */}
          <View className="flex-row items-center px-4 py-2 gap-2">
            <Heart className="text-gray-800" size={20} />
            <MessageCircle className="text-gray-800" size={20} />
          </View>

          {/* Stats */}
          <View className="px-4">
            <Text className="font-semibold text-sm">{item.likes} curtidas</Text>
            <Text className="text-sm text-gray-500">
              Ver todos os {item.comments} comentários
            </Text>
          </View>
        </View>
      )}
    />
  );
}
