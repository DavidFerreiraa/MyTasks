import { Text, TouchableOpacity} from "react-native";
import { THEME } from "../THEME";

interface BtnProps {
    btntext: string
    backgroundColor: string
}

export default function Btn(props: BtnProps) {
    return(
    <TouchableOpacity className={`px-4 py-1 rounded ${props.backgroundColor}`}>
        <Text style={{fontFamily: THEME.FONT_FAMILY.REGULAR}}>{props.btntext}</Text>
    </TouchableOpacity>
    )
}