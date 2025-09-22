import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, { RefObject, useMemo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type PostBottomSheetProps = {
  onClose: () => void;
  bottomSheetRef: RefObject<BottomSheet | null>;
};

export default function PostBottomSheet({
  bottomSheetRef,
  onClose,
}: PostBottomSheetProps) {
  const snapPoints = useMemo(() => ['45%'], []);

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
        <View className="flex-1 px-4 pt-4">
          <TouchableOpacity className="items-center py-2 mb-4 rounded-xl bg-red-100">
            <Text className="text-red-600 font-semibold">Deletar Foto</Text>
          </TouchableOpacity>

          <View className="items-center mb-6">
            <Image
              source={{ uri: 'https://placehold.co/200x200' }}
              className="w-32 h-32 rounded-xl mb-3"
            />
            <Text className="text-base text-gray-800 font-medium mb-1">
              Descrição do post atual
            </Text>
            <Text className="text-gray-500 text-sm">
              "Legenda da foto aqui..."
            </Text>
          </View>

          <TouchableOpacity className="w-full py-3 bg-blue-500 rounded-xl mb-3">
            <Text className="text-center text-white font-semibold">
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="w-full py-3 bg-gray-200 rounded-xl">
            <Text className="text-center text-gray-700 font-semibold">
              Editar Foto
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
