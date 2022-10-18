import { View, Text, TextInput } from "react-native";
import { FieldProps } from "../interfaces/interfaces";

export default function Field({title, ...rest}: FieldProps) {
    return(
        <View className="px-4 mx-4">
            <Text className="text-lg text-black font-extrabold">{title}</Text>
            <TextInput className="p-2 border border-blue-700 rounded"></TextInput>
        </View>
    )
}