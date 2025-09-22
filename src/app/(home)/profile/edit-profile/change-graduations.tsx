import { Input } from '@/components/ui/Input';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
  GestureHandlerRootView,
  ScrollView,
} from 'react-native-gesture-handler';

interface SelectedGrades {
  [art: string]: string[];
}

export default function ChangeGraduationsScreen() {
  // Dados das artes marciais com suas graduações
  const martialArtsData = [
    {
      name: 'Jiu-Jitsu',
      grades: [
        'Branca',
        'Azul',
        'Roxa',
        'Marrom',
        'Preta',
        'Vermelha e Preta',
        'Vermelha e Branca',
        'Vermelha',
      ],
    },
    {
      name: 'Judô',
      grades: [
        'Branca',
        'Cinza',
        'Azul',
        'Amarela',
        'Laranja',
        'Verde',
        'Roxa',
        'Marrom',
        'Preta',
        'Vermelha e Branca',
        'Vermelha',
      ],
    },
    {
      name: 'Karatê',
      grades: [
        'Branca',
        'Amarela',
        'Laranja',
        'Verde',
        'Azul',
        'Roxa',
        'Marrom',
        'Preta',
      ],
    },
    {
      name: 'Taekwondo',
      grades: ['Branca', 'Amarela', 'Verde', 'Azul', 'Vermelha', 'Preta'],
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [selectedGrades, setSelectedGrades] = useState<SelectedGrades>({});

  // Filtra as artes marciais com base na busca
  const filteredArts = martialArtsData.filter((art) =>
    art.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Função para lidar com a seleção das graduações
  const handleGradeSelection = (artName: string, grade: string) => {
    setSelectedGrades((prevSelected) => {
      const currentSelections = prevSelected[artName] || [];
      const isSelected = currentSelections.includes(grade);

      if (isSelected) {
        // Deseleciona a graduação
        const newSelections = currentSelections.filter((g) => g !== grade);
        return {
          ...prevSelected,
          [artName]: newSelections,
        };
      } else {
        // Só pode uma graduação por arte
        return {
          ...prevSelected,
          [artName]: [grade],
        };
      }
    });
  };

  // Cores para as graduações (pode ser customizado)
  const gradeColors: Record<string, string> = {
    Branca: 'bg-gray-200 text-gray-700',
    Azul: 'bg-blue-200 text-blue-800',
    Roxa: 'bg-purple-200 text-purple-800',
    Marrom: 'bg-amber-300 text-amber-900',
    Preta: 'bg-black text-white',
    Amarela: 'bg-yellow-200 text-yellow-800',
    Laranja: 'bg-orange-300 text-orange-900',
    Verde: 'bg-green-200 text-green-800',
    Vermelha: 'bg-red-300 text-red-900',
    'Vermelha e Preta': 'bg-red-600 text-white',
    'Vermelha e Branca': 'bg-pink-200 text-pink-800',
    Cinza: 'bg-gray-400 text-white',
  };

  return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white p-4">
        {/* Input de busca */}
        <Input
          label="Buscar artes marciais"
          placeholder="Digite o nome da arte marcial"
          value={searchText}
          onChangeText={setSearchText}
          className="mb-4"
        />

        {/* Selecionados */}
        {Object.keys(selectedGrades).length > 0 && (
          <View className="mb-6">
            <Text className="text-lg font-semibold text-gray-800 mb-2">
              Suas graduações
            </Text>
            <View className="flex-row flex-wrap gap-2">
              {Object.entries(selectedGrades).map(([art, grades]) =>
                grades.map((grade) => (
                  <View
                    key={`${art}-${grade}`}
                    className={`px-3 py-1.5 rounded-full flex-row items-center ${gradeColors[grade] || 'bg-gray-200 text-gray-700'}`}
                  >
                    <Text className="font-medium">{`${art} - ${grade}`}</Text>
                  </View>
                ))
              )}
            </View>
          </View>
        )}

        <ScrollView className="flex-1">
          {filteredArts.map((art) => (
            <View
              key={art.name}
              className="mb-6 border border-gray-200 rounded-xl overflow-hidden"
            >
              <Text className="text-lg font-bold text-gray-800 bg-gray-50 px-3 py-2">
                {art.name}
              </Text>

              {art.grades.map((grade) => {
                const isChecked = selectedGrades[art.name]?.includes(grade);
                return (
                  <TouchableOpacity
                    key={grade}
                    onPress={() => handleGradeSelection(art.name, grade)}
                    className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100"
                  >
                    <View className="flex-row items-center gap-3">
                      <View
                        className={`w-4 h-4 rounded-full ${gradeColors[grade]?.split(' ')[0] || 'bg-gray-300'}`}
                      />
                      <Text className="text-gray-800">{grade}</Text>
                    </View>

                    {/* Check */}
                    <View
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isChecked ? 'bg-blue-600 border-blue-600' : 'border-gray-400'
                      }`}
                    >
                      {isChecked && <Text className="text-white text-xs">✓</Text>}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </ScrollView>

        {/* Botão de salvar */}
        <TouchableOpacity
          className="bg-blue-600 p-4 rounded-xl mt-4 "
          onPress={() =>
            console.log('Graduações selecionadas:', selectedGrades)
          }
        >
          <Text className="text-white text-center font-semibold text-base">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}
