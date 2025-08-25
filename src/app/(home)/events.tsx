import { EventItem } from '@/@types/events';
import EventDetailsSheet from '@/components/events/EventDetailsSheet';
import { FAKES_EVENTS } from '@/constants/fakes';
import { getColorByType } from '@/helper/utils/labels';
import { ptBRTranslator } from '@/helper/utils/localeCalendarConfig';
import BottomSheet from '@gorhom/bottom-sheet';
import { ClockIcon, MapPinIcon } from 'lucide-react-native';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  AgendaList,
  CalendarProvider,
  ExpandableCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

LocaleConfig.locales['pt-br'] = ptBRTranslator;
LocaleConfig.defaultLocale = 'pt-br';

export default function TabEventsScreen() {
  const [selectedDate, setSelectedDate] = useState(FAKES_EVENTS[0].title);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const filteredSections = useMemo(() => {
    const section = FAKES_EVENTS.find((s) => s.title === selectedDate);
    return section ? [section] : [];
  }, [selectedDate]);

  const markedDates = useMemo(() => {
    const marks: Record<string, { marked: boolean }> = {};
    FAKES_EVENTS.forEach((e) => {
      marks[e.title] = { marked: true };
    });
    marks[selectedDate] = { ...(marks[selectedDate] || {}) };
    return marks;
  }, [selectedDate]);

  const renderItem = useCallback(({ item }: { item: EventItem }) => {
    const color = getColorByType(item.type);

    return (
      <TouchableOpacity
        className="mx-4 my-2 rounded-lg bg-white shadow-sm border-l-4"
        style={{ borderLeftColor: color }}
        activeOpacity={0.7}
        onPress={() => setSelectedEvent(item)}
      >
        <View className="p-4">
          {/* Título do Evento */}
          <Text className="text-base font-semibold text-gray-800 mb-1">
            {item.title}
          </Text>

          {/* Horário */}
          <View className="flex-row items-center mb-1">
            <ClockIcon size={14} color="#6B7280" className="mr-1" />
            <Text className="text-sm text-gray-500">
              {item.timeStart} - {item.timeEnd}
            </Text>
          </View>

          {/* Local */}
          {item.location && (
            <View className="flex-row items-center mb-1">
              <MapPinIcon size={14} color="#6B7280" className="mr-1" />
              <Text className="text-sm text-gray-500">{item.location}</Text>
            </View>
          )}

          {/* Tipo do Evento */}
          <Text
            className="text-xs font-medium text-white px-2 py-1 rounded-md"
            style={{ backgroundColor: color, alignSelf: 'flex-start' }}
          >
            {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
          </Text>

          {/* Descrição resumida */}
          {item.description && (
            <Text className="text-sm text-gray-400 mt-2" numberOfLines={2}>
              {item.description}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      bottomSheetRef.current?.snapToIndex(1);
    }
  }, [selectedEvent]);

  return (
    <GestureHandlerRootView className="flex-1">
      <CalendarProvider
        date={selectedDate}
        onDateChanged={handleDateChange}
        showTodayButton
        theme={{ todayButtonTextColor: '#2563EB' }}
      >
        <ExpandableCalendar firstDay={1} markedDates={markedDates} />
        {filteredSections.length > 0 ? (
          <AgendaList
            sections={filteredSections}
            renderItem={renderItem}
            keyExtractor={(item) => item.title + item.time}
            sectionStyle={{
              backgroundColor: '#F3F4F6',
            }}
          />
        ) : (
          <View className="items-center justify-center py-20 px-4">
            <Text className="text-5xl mb-4">📭</Text>
            <Text className="text-lg font-semibold text-gray-600 text-center">
              Nenhum monthly para o dia selecionado
            </Text>
            <Text className="text-sm text-gray-400 text-center mt-1">
              Selecione outra data no calendário acima
            </Text>
          </View>
        )}
      </CalendarProvider>

      <EventDetailsSheet
        event={selectedEvent}
        onClose={() => {
          setSelectedEvent(null);
          bottomSheetRef.current?.close();
        }}
        bottomSheetRef={bottomSheetRef}
      />
    </GestureHandlerRootView>
  );
}
