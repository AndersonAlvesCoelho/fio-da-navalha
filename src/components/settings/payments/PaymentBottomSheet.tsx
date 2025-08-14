import { IPayment } from '@/@types/payment';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import React, { RefObject, useEffect, useMemo, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';

type PaymentBottomSheetProps = {
  payment?: IPayment | null;
  onClose: () => void;
  bottomSheetRef: RefObject<BottomSheet | null>;
};

export default function PaymentBottomSheet({
  payment,
  bottomSheetRef,
  onClose,
}: PaymentBottomSheetProps) {
  const snapPoints = useMemo(() => ['45%'], []);
  const [fileName, setFileName] = useState<string | null>(
    payment?.proofFileName || null
  );
  const currentMonth = useMemo(() => {
    return payment
      ? payment.month
      : format(new Date(), 'MMMM yyyy', { locale: ptBR });
  }, [payment]);

  const value = payment?.value ?? 100; // valor padrão caso não tenha

  const handleSelectPaymentProof = async () => {
    Alert.alert(
      'Enviar Comprovante',
      'Escolha o tipo de arquivo que deseja enviar',
      [
        {
          text: 'Imagem',
          onPress: async () => {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 0.8,
              allowsEditing: true,
            });

            if (!result.canceled) {
              const uri = result.assets[0].uri;
              const name = uri.split('/').pop() || 'comprovante.jpg';
              setFileName(name);
              // Aqui você poderia fazer upload
            }
          },
        },
        {
          text: 'Documento',
          onPress: async () => {
            const result = await DocumentPicker.getDocumentAsync({
              type: ['application/pdf', 'image/*'],
            });

            if (result.type === 'success') {
              setFileName(result.name);
            }
          },
        },
        { text: 'Cancelar', style: 'cancel' },
      ]
    );
  };

  useEffect(() => {
    setFileName(payment?.proofFileName || null);
  }, [payment]);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
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
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.5} // controla a opacidade
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
    >
      <BottomSheetView className="p-6">
        <Text className="text-xl font-semibold">
          Mensalidade de {currentMonth}
        </Text>
        <Text className="text-sm text-gray-500 mb-6">
          Valor: R$ {value.toFixed(2)}
        </Text>

        {fileName && (
          <View className="mb-4">
            <Text className="text-sm text-gray-600">
              Arquivo selecionado:{' '}
              <Text className="font-medium">{fileName}</Text>
            </Text>
          </View>
        )}

        <View className="gap-4">
          {!fileName ? (
            <TouchableOpacity
              className="bg-emerald-600 py-3 px-4 rounded-xl"
              onPress={handleSelectPaymentProof}
            >
              <Text className="text-white text-center font-medium">
                Enviar comprovante
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="border border-emerald-600 py-3 px-4 rounded-xl"
              onPress={handleSelectPaymentProof}
            >
              <Text className="text-emerald-600 text-center font-medium">
                Reenviar comprovante
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
