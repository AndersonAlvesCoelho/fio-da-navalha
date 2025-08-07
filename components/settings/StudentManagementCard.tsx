import { IStudent } from '@/@types/my-students'
import { AwardIcon } from 'lucide-react-native'
import { FlatList, Image, Text, View } from 'react-native'

interface Props {
  students: IStudent[]
  getGraduationColor: (graduation: string) => string
}

export function StudentManagementCard({
  students,
  getGraduationColor,
}: Props) {
  return (
    <View className="bg-white rounded-xl shadow-sm gap-4">
      {/* Header */}
      <View className="gap-1">
        <View className="flex-row items-center ">
          <AwardIcon size={18} className=" text-black" />
          <Text className="text-base font-semibold">Gerenciamento de usuários</Text>
        </View>
        <Text className="text-sm text-gray-500">
          Visualize a graduação e o tipo de cada aluno
        </Text>
      </View>

      {/* Lista de Alunos */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ gap: 8 }}
        renderItem={({ item: student }) => (
          <View className="p-4 border border-gray-200 rounded-lg gap-4">
            <View className="flex-row items-center gap-3">
              <Image
                source={{ uri: student.avatar }}
                className="w-10 h-10 rounded-full bg-gray-200"
              />
              <View className="flex-1">
                <Text className="font-medium">{student.name}</Text>
                <Text className="text-sm text-gray-500">{student.graduation}</Text>
              </View>
            </View>

            {/* Infos: Graduação e Tipo */}
            <View className="flex-row flex-wrap justify-between gap-3">
              <View className="w-[48%]">
                <Text className="text-xs text-gray-500 ">Graduação</Text>
                <Text
                  className={`text-xs px-2 py-1 rounded-full text-center ${getGraduationColor(
                    student.graduation
                  )}`}
                >
                  {student.graduation}
                </Text>
              </View>

              <View className="w-[48%]">
                <Text className="text-xs text-gray-500 ">Tipo</Text>
                <Text className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-center">
                  {student.userType === 'aluno' ? 'Aluno' : 'Convidado'}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}
