import { Redirect } from 'expo-router';
// import 'react-native-gesture-handler';
import '@/assets/styles/global.css';
import 'react-native-reanimated';

export default function Index() {
  return <Redirect href="/(home)/settings" />;
}
