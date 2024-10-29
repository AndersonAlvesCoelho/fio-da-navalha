// IMPORT'S
import useReister from '@/hooks/auth/register.hook';
import { View } from 'react-native';

// SERVICE'S
import { formatTime } from '@/utils/time';

// COMPONET'S
import { CodeInput } from '@/components/app/CodeInput';
import { BaseText } from '@/components/ui/BaseText';
import { ButtonLabel, ButtonRoot } from '@/components/ui/Button';

// STYLE'S

export default function ScreenValidateCode() {
  const { handleCodeComplete, handleSendCode, code, timerSendCode } =
    useReister();

  console.log('code ', code);
  return (
    <View className="flex-1 justify-evenly gap-6">
      <View className="gap-8">
        <View className="gap-3 items-center">
          <BaseText variant="title">Enter confirmation code!</BaseText>
          <BaseText variant="caption">
            A 4-digit code was sent to {'\n'} lucasscott3@email.com
          </BaseText>
        </View>
        <CodeInput length={4} onCodeComplete={handleCodeComplete} />
      </View>

      <View className="gap-2 items-center">
        {!Boolean(timerSendCode) ? (
          <ButtonRoot variant="link" className="w-1/2" onPress={handleSendCode}>
            <ButtonLabel labelClasses="no-underline" label="Resend code" />
          </ButtonRoot>
        ) : (
          <BaseText variant="caption">
            Waite: {formatTime(timerSendCode)}
          </BaseText>
        )}

        <ButtonRoot
          className="w-1/2"
          onPress={() => {}}
          disabled={!Boolean(code)}
        >
          <ButtonLabel label="Próximo" />
        </ButtonRoot>
      </View>
    </View>
  );
}
