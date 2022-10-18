import { View, ViewProps } from "react-native";
import { TitleAndDesc } from "../TitleAndDesc";

export default function HeaderLogin({...rest}: ViewProps) {
    return (
        <View {...rest}>
            <TitleAndDesc Title="Welcome!" Description="Before begin your own tasks, do the login:"/>
        </View>
    )
}