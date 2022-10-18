import { View, Text } from 'react-native';
import { TitleAndDescProps } from '../interfaces/interfaces';

export function TitleAndDesc({Title, Description}: TitleAndDescProps) {
  return (
    <View className='justify-center items-center px-4 flex-col gap-4'>
        <Text className='text-2xl font-bold'>{Title}</Text>
        <Text className='font-regular text-base'>{Description}</Text>
    </View>
  );
}