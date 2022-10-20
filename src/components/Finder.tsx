import { View, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";
import { useState } from 'react';

export default function Finder({getValue}: any) {
    var [text, setText] = useState<string>("");

    return (
        <View className="m-4 rounded p-3 border-blue-700 border flex-row justify-between">
            <TextInput
                placeholder="Search a Task"
                onChangeText={(value) => {
                    setText(value);
                    text = value;
                    getValue(text);
                }}
                value={text}
            ></TextInput>
            <TouchableOpacity>
                <FontAwesome name="search" size={24} color="#1d4ed8" />
            </TouchableOpacity>
        </View>
    );
}