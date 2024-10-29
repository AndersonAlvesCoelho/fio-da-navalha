// IMPORT'S
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    name: z.string({
      required_error: 'Nome é obrigatório.',
    }),
    email: z
      .string({
        required_error: 'E-mail é obrigatório. *',
      })
      .email({
        message: 'E-mail inválido. *',
      }),
    password: z
      .string({
        required_error: 'Senha é obrigatório.',
      })
      .min(6, {
        message: 'a senha deve ter pelo menos 6 caracteres.',
      })
      .max(8, {
        message: 'a senha não deve ter mais de 8 caracteres.',
      }),
    confirmPassword: z.string({
      required_error: 'Confirmação de senha é obrigatório.',
    }),
    privacyPolicy: z
      .boolean({
        required_error: 'Você deve aceitar a política de privacidade.',
      })
      .refine((value) => value === true, {
        message: 'Você deve aceitar a política de privacidade.',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'As senhas não coincidem.',
  });

export default function useReister() {
  const methods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const [code, setCode] = useState<number>(0);
  const [timerSendCode, setTimerSendCode] = useState<number>(0);

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    router.push('/(auth)/sign-up/validate-code');
  }

  function handleCodeComplete(code: string) {
    setCode(Number(code));
  }

  function handleSendCode() {
    console.log('Código enviado: ', code);
    setTimerSendCode(60);
  }

  useEffect(() => {
    if (timerSendCode > 0) {
      const intervalId = setInterval(() => {
        setTimerSendCode(prevTimer => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timerSendCode === 0) {
      setTimerSendCode(0);
    }
  }, [timerSendCode]);

  return {
    // STATES
    errors,
    timerSendCode,
    code,

    // ACTIONS
    methods,
    handleSubmit,
    onSubmit,
    handleCodeComplete,
    handleSendCode
  };
}
