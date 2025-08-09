
import { EnumEventType, EventItem, ISection } from '@/@types/events';
import EventDetailsSheet from '@/components/events/EventDetailsSheet';
import { ptBRTranslator } from '@/helper/utils/localeCalendarConfig';
import BottomSheet from '@gorhom/bottom-sheet';
import { ClockIcon } from 'lucide-react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
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

const EVENTS: ISection[] = [
  {
    title: '2025-08-06',
    data: [
      { title: 'Aula de Capoeira', time: '19:00', type: 'daily' },
      { title: 'Aniversário da Maria', time: '00:00', type: 'birthday' },
    ],
  },
  {
    title: '2025-08-08',
    data: [{ title: 'Aula de Jiu-Jitsu', time: '20:00', type: 'daily' }],
  },
  {
    title: '2025-08-15',
    data: [
      { title: 'Roda de Capoeira Comemorativa', time: '18:00', type: 'monthly' },
    ],
  },
  {
    title: '2025-08-16',
    data: [{ title: 'Treino especial', time: '10:00', type: 'monthly' }],
  },
];

const getColorByType = (type: EnumEventType) => {
  switch (type) {
    case 'daily':
      return '#2563EB';
    case 'monthly':
      return '#10B981';
    case 'birthday':
      return '#F59E0B';
    default:
      return '#6B7280';
  }
};

const EventCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(EVENTS[0].title);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);


  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  const filteredSections = useMemo(() => {
    const section = EVENTS.find((s) => s.title === selectedDate);
    return section ? [section] : [];
  }, [selectedDate]);

  const markedDates = useMemo(() => {
    const marks: Record<string, { marked: boolean }> = {};
    EVENTS.forEach((e) => {
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
        onPress={() => {
            setSelectedEvent(item);
            bottomSheetRef.current?.expand();
        }}
      >
        <View className="p-4">
          <Text className="text-base font-semibold text-gray-800 mb-1">
            {item.title}
          </Text>
          <View className="flex-row items-center">
            <ClockIcon size={14} color="#6B7280" className="mr-1" />
            <Text className="text-sm text-gray-500">{item.time}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }, []);

  return (
    <GestureHandlerRootView className='flex-1'>
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
};

export default EventCalendar;
