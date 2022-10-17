import { View, Text } from 'react-native';

interface TitleAndDescProps {
    Title: string
    Description: string
}

export function TitleAndDesc({Title, Description}: TitleAndDescProps) {
  return (
    <View className='justify-center items-center'>
        <Text className='text-2xl font-bold'>{Title}</Text>
        <Text>{Description}</Text>
    </View>
  );
}