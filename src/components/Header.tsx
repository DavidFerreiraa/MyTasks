import { useNavigation } from "@react-navigation/native";
import { View, Text} from "react-native";
import { THEME } from "../THEME";
import Btn from "./Btn";

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {

  const navigation = useNavigation();

  return (
    <View className="w-full h-16 flex flex-row items-center justify-between bg-blue-700 px-4">
      <Text className="text-white text-2xl" style={{fontFamily: THEME.FONT_FAMILY.BOLD}}>{props.title}</Text>
      <Btn addStyle="bg-white px-4 py-1 rounded" btntext="Get started" onPress={() => {
        navigation.navigate('home'); 
      }}/>
    </View>
  );
}
