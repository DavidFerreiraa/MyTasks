import { Text, TouchableOpacity} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../THEME";
import { BtnProps } from "../interfaces/interfaces";

export default function Btn({btntext, plusIcon, customfont, ...rest }: BtnProps) {
    return (
        <TouchableOpacity {...rest}>
            {btntext && (<Text style={customfont? { fontFamily: THEME.FONT_FAMILY.REGULAR }: null}>
                {btntext}
            </Text>)}
            {plusIcon && (
                <AntDesign name="pluscircle" size={28} color="white" />
            )}
        </TouchableOpacity>
    );
}