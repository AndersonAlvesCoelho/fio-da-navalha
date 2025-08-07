// components/EventDetailsSheet.tsx
import { EventItem } from '@/@types/events';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { ClockIcon } from 'lucide-react-native';
import React, { RefObject } from 'react';
import { Text, View } from 'react-native';

type Props = {
  event: EventItem | null;
  onClose: () => void;
  bottomSheetRef: RefObject<BottomSheet | null>;
};

const getColorByType = (type: string) => {
  switch (type) {
    case 'aula':
      return '#2563EB';
    case 'evento':
      return '#10B981';
    case 'aniversario':
      return '#F59E0B';
    default:
      return '#6B7280';
  }
};

const EventDetailsSheet: React.FC<Props> = ({
  event,
  onClose,
  bottomSheetRef,
}) => {
  const snapPoints = ['40%'];

  if (!event) return null;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      enableDynamicSizing={false}
      onClose={onClose}
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 10,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
      backgroundStyle={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: 'white',
      }}
    >
      <BottomSheetView style={{ padding: 24 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: getColorByType(event.type),
          }}
        >
          {event.title}
        </Text>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}
        >
          <ClockIcon size={16} color="#6B7280" />
          <Text style={{ marginLeft: 6, color: '#6B7280' }}>{event.time}</Text>
        </View>

        <Text style={{ marginTop: 16, color: '#4B5563' }}>
          Aqui você pode colocar mais detalhes do evento, como local, descrição,
          etc.
        </Text>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default EventDetailsSheet;
