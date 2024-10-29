
import { OptimizedDataListProps } from '@/@types/dataList.type';
import React from 'react';
import { FlatList, View } from 'react-native';

type SeparatorMethods = {
  highlight: () => void;
  unhighlight: () => void;
  updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
};

const OptimizedDataList = <T,>({
  data,
  renderItem,
  ...flatListProps
}: OptimizedDataListProps<T>) => {
  const SMALL_DATA_THRESHOLD = 20;

  if (data.length <= SMALL_DATA_THRESHOLD) {
    return (
      <View className="p-4">
        {data.map((item, index) => {
          const separators: SeparatorMethods = {
            highlight: () => {},
            unhighlight: () => {},
            updateProps: () => {},
          };

          return (
            <View key={index} className="mb-2">
              {renderItem({ item, index, separators })}
            </View>
          );
        })}
      </View>
    );
  } else {
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        className="p-4"
        {...flatListProps}
      />
    );
  }
};

export default OptimizedDataList;
