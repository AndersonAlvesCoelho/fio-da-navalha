import { IPost } from '@/@types/post';
import { FAKE_POSTS } from '@/constants/fakes';
import { getTimeAgo } from '@/helper/format';
import {
  Badge,
  BookmarkIcon,
  HeartIcon,
  MessageCircleIcon,
  SendIcon,
} from 'lucide-react-native';
import { useCallback, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PAGE_SIZE = 5;
const MAX_LENGTH = 100;

export default function TabHomeScreen() {
  const [visiblePosts, setVisiblePosts] = useState(
    FAKE_POSTS.slice(0, PAGE_SIZE)
  );
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(FAKE_POSTS.length > PAGE_SIZE);
  const loadingRef = useRef(false);
  const [expanded, setExpanded] = useState(false);

  const loadMorePosts = useCallback(() => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true;
    setLoading(true);

    setTimeout(() => {
      const currentLength = visiblePosts.length;
      const nextPosts = FAKE_POSTS.slice(
        currentLength,
        currentLength + PAGE_SIZE
      );

      setVisiblePosts((prev) => [...prev, ...nextPosts]);
      setHasMore(currentLength + nextPosts.length < FAKE_POSTS.length);
      setLoading(false);
      loadingRef.current = false;
    }, 1000);
  }, [hasMore, visiblePosts]);

  const DescriptionText = ({ text }: { text: string }) => {
    const [expanded, setExpanded] = useState(false);

    if (text.length <= MAX_LENGTH) {
      return <Text className="text-xs text-primary-950">{text}</Text>;
    }

    return (
      <>
        <Text className="flex-row text-xs text-primary-950">
          {expanded ? text : `${text.substring(0, MAX_LENGTH)}... `}
        </Text>
        <TouchableOpacity onPress={() => setExpanded(!expanded)}>
          <Text className="text-xs text-primary-700 font-semibold">
            {expanded ? ' ver menos' : 'ver mais'}
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  const RenderItem: React.FC<{ item: IPost; index: number }> = ({
    item,
    index,
  }) => {
    const graduationMain =
      item.user?.graduations &&
      item.user?.graduations.find((grad) => grad.name);

    return (
      <View className="mb-6 bg-white p-4 gap-3" key={index}>
        {/* Header */}
        <View className="flex-row items-center">
          <Image
            source={{ uri: item.user.avatar }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <View>
            <View className="flex-row items-center gap-2">
              <Text className="font-bold text-base">{item.user.name}</Text>

              {graduationMain && (
                <View className="relative items-center justify-center">
                  <Badge
                    size={18}
                    // color={graduationMain?.color}
                    // fill={graduationMain?.color + '20'}

                    color="#facc15"
                    fill="#facc15"
                  />
                  <Text className="absolute text-black font-bold text-xs">
                    {graduationMain?.number}
                  </Text>
                </View>
              )}
            </View>
            <Text className="text-xs text-gray-500">
              {getTimeAgo(item.createdAt)}
            </Text>
          </View>
        </View>
        <DescriptionText text={item.description} />

        {/* Post Image */}
        <Image
          source={{ uri: item.image }}
          className="w-full h-72 rounded-lg"
          resizeMode="cover"
        />

        {/* Actions */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="flex-row">
              {item.likes.slice(0, 3).map((like, index) => (
                <Image
                  key={like.id}
                  source={{ uri: like.user.avatar }}
                  className="w-6 h-6 rounded-full border-2 border-white"
                  style={{ marginLeft: index === 0 ? 0 : -10 }}
                  resizeMode="cover"
                />
              ))}
            </View>

            <Text className="font-semibold text-sm text-primary-950">
              {item.likes.length} curtidas
            </Text>
          </View>
          <Text className="text-sm text-primary-950">
            {item.comments.length} comentários
          </Text>
        </View>

        <View className="h-[1px] bg-neutral-200" />
        {/* Stats */}
        <View className="flex-row gap-6 justify-around">
          <TouchableOpacity className="items-center">
            <HeartIcon className="text-primary-900" size={24} />
            <Text className="text-primary-950 text-sm">Curtir</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <MessageCircleIcon className="text-primary-900" size={24} />
            <Text className="text-primary-950 text-sm">Comentar</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <SendIcon className="text-primary-900" size={24} />
            <Text className="text-primary-950 text-sm">Compartilhar</Text>
          </TouchableOpacity>

          <TouchableOpacity className="items-center">
            <BookmarkIcon className="text-primary-900" size={24} />
            <Text className="text-primary-950 text-sm">Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-200 gap-2">
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
        renderItem={({ item, index }) => (
          <RenderItem item={item} index={index} />
        )}
      />
    </SafeAreaView>
  );
}
