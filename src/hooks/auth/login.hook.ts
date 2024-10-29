// IMPORT'S
import { WELCOME_MESSAGES } from "@/constants/presentations.constant";
import { getRandomElement } from "@/utils/random";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z
    .string({
      required_error: "E-mail é obrigatório. *",
    })
    .email({
      message: "E-mail inválido. *",
    }),
  password: z.string({
    required_error: "Senha é obrigatório. *",
  }),
});

export default function useLogin() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const [welcomeMessage, setWelcomeMessage] = useState<{
    title: string;
    text: string;
  }>({ title: "", text: "" });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    router.push("/(home)");
  }

  function handleNavigationRegister() {
    router.push("/(auth)/sign-up/validate-code");
  }

  useEffect(() => {
    const message = getRandomElement(WELCOME_MESSAGES);
    setWelcomeMessage(message);
  }, []);

  return {
    // STATES
    errors,
    welcomeMessage,

    // ACTIONS
    methods,
    handleSubmit,
    onSubmit,
    handleNavigationRegister,
  };
}
