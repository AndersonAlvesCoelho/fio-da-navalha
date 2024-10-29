// IMPORT'S
import { FormProvider } from 'react-hook-form';
import { View } from 'react-native';

// SERVICE'S
import useReister from '@/hooks/auth/register.hook';

// COMPONET'S
import { BaseText } from '@/components/ui/BaseText';
import { ButtonLabel, ButtonRoot } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { Input } from '@/components/ui/Input';

// STYLE'S

export default function ScreenRegister() {
  const { errors, methods, handleSubmit, onSubmit } = useReister();

  return (
    <View className="flex-grow justify-center px-6 py-8">
      <View className="gap-2">
        <BaseText variant="title">Sign up!</BaseText>
        <BaseText variant="caption">Create an account to get started.</BaseText>
      </View>

      <View className="gap-4">
        <FormProvider {...methods}>
          <Input
            name="name"
            label="Name"
            placeholder="Full name"
            requiredError={errors.name?.message}
          />
          <Input
            name="email"
            label="E-mail"
            placeholder="name@email.co"
            type="text"
            requiredError={errors.email?.message}
          />
          <Input
            name="password"
            label="Passowrd"
            placeholder="Create a passaword"
            type="password"
            requiredError={errors.password?.message}
          />
          <Input
            name="confirmPassword"
            placeholder="Confirm password"
            type="password"
            requiredError={errors.confirmPassword?.message}
          />

          <Checkbox
            name="privacyPolicy"
            label="I've read and agree with the Terms and Conditions and the Privacy Policy."
            labelClasses="text-sm"
            requiredError={errors.privacyPolicy?.message}
          />

          <ButtonRoot onPress={handleSubmit(onSubmit)}>
            <ButtonLabel label="Próximo" />
          </ButtonRoot>
        </FormProvider>
      </View>
    </View>
  );
}
