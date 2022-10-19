import { View, Text } from 'react-native';
import { TitleAndDescProps } from '../interfaces/interfaces';

export function TitleAndDesc({Title, Description, textColor, ...rest}: TitleAndDescProps) {
  return (
      <View className="justify-center items-center px-4 flex-col gap-4" {...rest}>
          <Text className={`text-2xl font-bold ${textColor}`}>
              {Title}
          </Text>
          <Text className={`font-regular text-base ${textColor}`}>
              {Description}
          </Text>
      </View>
  );
}