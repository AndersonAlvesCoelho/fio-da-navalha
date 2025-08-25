import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

type Story = {
  id: string;
  name: string;
  imageUri: string;
  isDefault?: boolean;
  view?: boolean;
};

type StoriesCarouselProps = {
  stories: Story[];
  onStoryPress?: (story: Story) => void;
};

export default function StoriesCarousel({
  stories,
  onStoryPress,
}: StoriesCarouselProps) {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  const handlePress = (story: Story) => {
    setSelectedStory(story.id);
    if (onStoryPress) onStoryPress(story);
  };

  return (
    <View>
      <FlatList
        horizontal
        data={stories}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const isSeen = item.view === true;
          const isUnseen = item.view === false;
          const isDefault = item.isDefault;

          return (
            <TouchableOpacity
              onPress={() => handlePress(item)}
              className="mr-4 items-center"
            >
              <View
                className={cn(
                  'w-[70px] h-[70px] rounded-full justify-center items-center overflow-hidden relative',
                  isUnseen && 'border-2 border-dashed border-green-500',
                  isSeen && 'opacity-50',
                  isDefault && 'border-2 border-blue-500'
                )}
              >
                <Image
                  source={{ uri: item.imageUri }}
                  className="w-[64px] h-[64px] rounded-full"
                />
                {isDefault && (
                  <View className="absolute bottom-1.5 right-1.5 bg-blue-500 p-1 rounded-full">
                    <PlusIcon size={12} color="#fff" />
                  </View>
                )}
              </View>
              <Text
                className="mt-2 text-xs max-w-[70px] text-center"
                numberOfLines={1}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
