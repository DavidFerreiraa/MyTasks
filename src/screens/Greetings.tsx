import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from '../components/Header';

export function Greetings() {
  return (
    <View>
        <Header title="MyTasks" btntext="Get Started"/>
    </View>
  );
}