import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { FieldProps } from "../interfaces/interfaces";

export default function Field({title, getValue, textColor="text-black", ...rest}: FieldProps) {

    var [text, setText] = useState<string>("");

    return(
        <View className="w-full">
            <Text className={`text-lg ${textColor} font-extrabold`} >{title}</Text>
            <TextInput className="p-2 border border-blue-700 rounded" {...rest} onChangeText={(value) => {
                setText(value);
                text = value
                getValue(text)
            }} value={text}/>
        </View>
    )
}