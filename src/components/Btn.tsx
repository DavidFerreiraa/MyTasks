import { Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../THEME";

interface BtnProps extends TouchableOpacityProps {
    btntext?: string
    plusIcon?: boolean
}

export default function Btn({btntext, plusIcon, ...rest }: BtnProps) {
    return (
        <TouchableOpacity {...rest}>
            {btntext && (<Text style={{ fontFamily: THEME.FONT_FAMILY.REGULAR }}>
                {btntext}
            </Text>)}
            {plusIcon && (
                <AntDesign name="pluscircle" size={28} color="white" />
            )}
        </TouchableOpacity>
    );
}