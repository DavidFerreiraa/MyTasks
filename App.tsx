import { View, Text } from 'react-native';
import Routes from './src/routes';

import {
  useFonts,
  OleoScript_400Regular,
  OleoScript_700Bold,
} from '@expo-google-fonts/oleo-script';

import Loading from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    OleoScript_400Regular,
    OleoScript_700Bold
  })

  return (
    <>
      { fontsLoaded? <Routes/>: <Loading/> }
    </>
  );
}