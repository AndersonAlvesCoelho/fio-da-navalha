import { Redirect } from 'expo-router';
// import 'react-native-gesture-handler';
import 'react-native-reanimated';
import '../global.css';

export default function Index() {
  return <Redirect href="/(auth)/login" />;
}
