import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Greetings } from './src/screens/Greetings';

import {
  useFonts,
  OleoScript_400Regular,
  OleoScript_700Bold,
} from '@expo-google-fonts/oleo-script';
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    OleoScript_400Regular,
    OleoScript_700Bold
  })

  return (
    <SafeAreaView>
      {fontsLoaded? <Greetings/> : <Loading/> }
    </SafeAreaView>
  );
}
