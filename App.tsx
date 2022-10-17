import { View } from 'react-native';

import {
  useFonts,
  OleoScript_400Regular,
  OleoScript_700Bold,
} from '@expo-google-fonts/oleo-script';

import Loading from './src/components/Loading';
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    OleoScript_400Regular,
    OleoScript_700Bold
  })

  return (
    <View>
      {fontsLoaded? <Routes/> : <Loading/>}
    </View>
  );
}
