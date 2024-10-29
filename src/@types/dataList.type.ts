import { FlatListProps, ListRenderItem } from 'react-native';

export interface OptimizedDataListProps<T>
  extends Omit<FlatListProps<T>, 'renderItem'> {
  data: T[];
  renderItem: ListRenderItem<T>;
}
