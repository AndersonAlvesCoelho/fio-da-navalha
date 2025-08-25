import { EventItem } from '@/@types/events';
import { SNAP_POINTS } from '@/constants/bottomSheet';
import { getColorByType } from '@/helper/utils/labels';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { ClockIcon, MapPinIcon } from 'lucide-react-native';
import React, { RefObject } from 'react';
import { Text, View } from 'react-native';

type Props = {
  event: EventItem | null;
  onClose: () => void;
  bottomSheetRef: RefObject<BottomSheet | null>;
};

const EventDetailsSheet: React.FC<Props> = ({
  event,
  onClose,
  bottomSheetRef,
}) => {
  const color = getColorByType(event?.type || 'other');

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={SNAP_POINTS}
      enablePanDownToClose
      enableDynamicSizing={false}
      onClose={onClose}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 10,
      }}
      backgroundStyle={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: 'white',
      }}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.5}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
    >
      {event ? (
        <BottomSheetView className="p-6">
          {/* Título */}
          <Text
            className="text-xl font-bold mb-3"
            style={{ color: color }}
          >
            {event.title}
          </Text>

          {/* Tipo */}
          <View className="mb-3 flex-row items-center">
            <Text className="text-sm text-gray-500 mr-2">Tipo:</Text>
            <Text
              className="text-xs font-medium text-white px-2 py-1 rounded-md"
              style={{ backgroundColor: color }}
            >
              {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
            </Text>
          </View>

          {/* Horário */}
          <View className="flex-row items-center mb-2">
            <ClockIcon size={16} color="#6B7280" />
            <Text className="ml-2 text-gray-500">
              {event.timeStart} - {event.timeEnd}
            </Text>
          </View>

          {/* Local */}
          <View className="flex-row items-center mb-4">
            <MapPinIcon size={16} color="#6B7280" />
            <Text className="ml-2 text-gray-500">{event.location}</Text>
          </View>

          {/* Descrição */}
          {event.description ? (
            <Text className="text-sm text-gray-600 leading-5">
              {event.description}
            </Text>
          ) : (
            <Text className="text-sm text-gray-400 leading-5">
              Sem descrição disponível.
            </Text>
          )}
        </BottomSheetView>
      ) : null}
    </BottomSheet>
  );
};

export default EventDetailsSheet;
