import { View, ActivityIndicator } from 'react-native';

export function Loading() {
  return (
    <View className='w-full h-full items-center justify-center'>
        <ActivityIndicator color="rgb(59 130 246)"/>
    </View>
  );
}