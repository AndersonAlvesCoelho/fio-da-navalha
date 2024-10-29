// IMPORT'S
import { FormProvider } from "react-hook-form";
import { Image, ScrollView, View } from "react-native";

// SERVICE'S
import useLogin from "@/hooks/auth/login.hook";

// COMPONET'S
import { BaseText } from "@/components/ui/BaseText";
import { ButtonLabel, ButtonRoot } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Input } from "@/components/ui/Input";

// STYLE'S
import Icon from "@/assets/icons/icons";
import { colors } from "@/assets/styles/theme";

export default function ScreenLogin() {
  const {
    errors,
    welcomeMessage,
    methods,
    handleSubmit,
    onSubmit,
    handleNavigationRegister,
  } = useLogin();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1">
        <Image
          source={welcomeMessage.cover}
          className="h-80 w-full"
          resizeMode="cover"
          alt="Fake image login"
        />
        <View className="flex-1 justify-center gap-6  px-6 py-8">
          <View className="gap-2 ">
            <BaseText variant="title">{welcomeMessage.title}</BaseText>
            <BaseText variant="subtitle">{welcomeMessage.text}</BaseText>
          </View>

          <View className="gap-4">
            <FormProvider {...methods}>
              <Input
                name="email"
                label="E-mail"
                placeholder="Entre com o seu e-mail"
                requiredError={errors.email?.message}
              />
              <Input
                name="password"
                type="password"
                label="Senha"
                placeholder="*******"
                requiredError={errors.password?.message}
              />
              <BaseText variant="caption">Esqueceu a senha?</BaseText>

              <ButtonRoot onPress={handleSubmit(onSubmit)}>
                <ButtonLabel label="Entrar" />
              </ButtonRoot>
            </FormProvider>
            <BaseText variant="link" className="self-center font-light">
              Não é membro?{" "}
              <ButtonRoot variant="link" onPress={handleNavigationRegister}>
                <ButtonLabel
                  label="Cadastre-se"
                  size="sm"
                  labelClasses="mt-4"
                />
              </ButtonRoot>
            </BaseText>

            <Divider />

            <BaseText variant="link" className="self-center font-light">
              Ou continuar com
            </BaseText>

            <View className="flex flex-row justify-center items-center gap-3">
              <ButtonRoot className="bg-red-500 py-2 px-3 rounded-full">
                <Icon name="GoogleIcon" color={colors.white} size={16} />
              </ButtonRoot>
              <ButtonRoot className="py-2 px-3 rounded-full">
                <Icon name="AppleIcon" color={colors.white} size={16} />
              </ButtonRoot>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
