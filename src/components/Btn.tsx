import { Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import { THEME } from "../THEME";

interface BtnProps extends TouchableOpacityProps {
    btntext: string
    addStyle: string
}

export default function Btn({btntext, addStyle, ...rest }: BtnProps) {
    return(
    <TouchableOpacity className={`${addStyle}`} {...rest}>
        <Text style={{fontFamily: THEME.FONT_FAMILY.REGULAR}}>{btntext}</Text>
    </TouchableOpacity>
    )
}