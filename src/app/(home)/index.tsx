
import PostsFeed from '@/components/home/PostsFeed';
import { FAKE_POSTS } from '@/constants/fakes';
import { SafeAreaView } from 'react-native';

export default function TabHomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <PostsFeed posts={FAKE_POSTS} />
    </SafeAreaView>
  );
}
