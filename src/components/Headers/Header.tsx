import { useNavigation } from "@react-navigation/native";
import { View, Text} from "react-native";
import { THEME } from "../../THEME";
import Btn from "../Btn";

import { HeaderProps } from "../../interfaces/interfaces";

export function Header(props: HeaderProps) {

  const navigation = useNavigation();

  return (
    <View className="w-full h-16 flex flex-row items-center justify-between bg-blue-700 px-4 shadow-md shadow-black">
      <Text className="text-white text-2xl" style={{fontFamily: THEME.FONT_FAMILY.BOLD}}>{props.title}</Text>
      <Btn 
      className="bg-white px-4 py-1 rounded" 
      btntext="Get started" onPress={() => {
        navigation.navigate('home'); 
      }}
      />
    </View>
  );
}
