import { IPayment } from '@/@types/payment';
import PaymentBottomSheet from '@/components/settings/payments/PaymentBottomSheet';
import { formatDateNumeric, formatMonthYear } from '@/helper/format';
import BottomSheet from '@gorhom/bottom-sheet';
import { CheckCircle, Clock, XCircle } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PaymentsHistoryScreen() {
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [payments, setPayments] = useState<IPayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState<IPayment | null>(null);

  useEffect(() => {
    const fetchPayments = async () => {
      setLoading(true);

      const fakeData: IPayment[] = [
        {
          id: '1',
          month: 'Agosto 2025',
          updater_at: '2025-08-05T14:32:00',
          value: 250.5,
          status: 'confirmado',
          proofFileName: 'Agosto 2025-pix.jpg',
        },
        {
          id: '2',
          month: 'Julho 2025',
          updater_at: '2025-07-04T10:15:00',
          value: 250.5,
          status: 'enviado',
          proofFileName: 'Julho 2025-pix.jpg',
        },
        {
          id: '3',
          month: 'Junho 2025',
          updater_at: '2025-06-03T19:00:00',
          value: 250.5,
          status: 'recusado',
          proofFileName: 'Junho 2025-pix.jpg',
        },
      ];

      setTimeout(() => {
        setPayments(fakeData);
        setLoading(false);
      }, 1000);
    };

    fetchPayments();
  }, []);

  const renderStatusIcon = (status: IPayment['status']) => {
    switch (status) {
      case 'confirmado':
        return <CheckCircle size={20} color="green" />;
      case 'enviado':
        return <Clock size={20} color="orange" />;
      case 'pendente':
        return <Clock size={20} color="gray" />;
      case 'recusado':
        return <XCircle size={20} color="red" />;
      default:
        return null;
    }
  };

  const handleOpenBottomSheet = (payment: IPayment) => {
    setSelectedPayment(payment);
    bottomSheetRef.current?.snapToIndex(0);
  };

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#3b82f6" />
        <Text className="mt-2 text-gray-500">Carregando histórico...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
        <Text className="text-xl font-bold mb-4 px-4">
          Histórico de Pagamentos
        </Text>
        {payments.length === 0 ? (
          <Text className="text-gray-500 px-4">
            Nenhum pagamento encontrado.
          </Text>
        ) : (
          <FlatList
            data={payments}
            keyExtractor={(item) => item?.id || '0'}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleOpenBottomSheet(item)}
                className="flex-row items-center justify-between border-b border-gray-200 py-3 px-4"
              >
                <View>
                  <Text className="font-semibold">
                    {formatMonthYear(item.updater_at)}
                  </Text>
                  <Text className="text-gray-500 text-sm">
                    Enviado em: {formatDateNumeric(item.updater_at)}
                  </Text>
                </View>
                {renderStatusIcon(item.status)}
              </TouchableOpacity>
            )}
          />
        )}

        {/* Bottom Sheet */}

        <PaymentBottomSheet
          onClose={() => bottomSheetRef.current?.close()}
          bottomSheetRef={bottomSheetRef}
          payment={selectedPayment}
        />
      </View>
    </GestureHandlerRootView>
  );
}
