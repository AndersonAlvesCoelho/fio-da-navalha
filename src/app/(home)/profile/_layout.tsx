// app/profile/_layout.tsx
import { colors } from '@/assets/styles/theme';
import BackButton from '@/components/header/BackButton';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.white },
        headerShadowVisible: false,
        headerTintColor: colors.primary['500'],
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Perfil',
          headerLeft: () => null,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          headerTitle: '',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="edit-profile/index"
        options={{
          headerTitle: 'Editar Perfil',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="edit-profile/change-email"
        options={{
          headerTitle: 'Atualizar Email',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="edit-profile/change-password"
        options={{
          headerTitle: 'Atualizar Senha',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="student/payments"
        options={{
          headerTitle: 'Financeiro',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="teacher/financial-management"
        options={{
          headerTitle: 'Gestão Financeira',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
      <Stack.Screen
        name="teacher/students"
        options={{
          headerTitle: 'Meus Alunos',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />

      <Stack.Screen
        name="guest/index"
        options={{
          headerTitle: 'Convidados',
          headerLeft: () => (
            <BackButton color={colors.primary[500]} size={28} />
          ),
        }}
      />
    </Stack>
  );
}
