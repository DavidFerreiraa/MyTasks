import { View, Text } from 'react-native';
import { TitleAndDescProps } from '../interfaces/interfaces';

export function TitleAndDesc({Title, Description, ...rest}: TitleAndDescProps) {
  return (
      <View className="justify-center items-center px-4 flex-col gap-4">
          <Text className="text-2xl font-bold" {...rest}>
              {Title}
          </Text>
          <Text className="font-regular text-base" {...rest}>
              {Description}
          </Text>
      </View>
  );
}