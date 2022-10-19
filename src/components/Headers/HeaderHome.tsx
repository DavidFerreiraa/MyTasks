import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { THEME } from "../../THEME";
import Btn from "../Btn";

import { HeaderProps } from "../../interfaces/interfaces";

export function HeaderHome({title, ...rest}: HeaderProps) {

    const navigation = useNavigation();

    return (
        <View className="w-full h-16 flex flex-row items-center justify-between bg-blue-700 px-4" {...rest}>
            <Text
                className="text-white text-2xl"
                style={{ fontFamily: THEME.FONT_FAMILY.BOLD }}
            >
                {title}
            </Text>
            <Btn
                plusIcon
                onPress={() => {
                    navigation.navigate("home");
                }}
                customfont={true}
            />
        </View>
    );
}
