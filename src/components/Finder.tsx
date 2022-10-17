import { View, TextInput } from 'react-native'
import { FontAwesome } from "@expo/vector-icons";

export default function Finder() {
    return (
        <View className="m-4 rounded p-3 border-blue-700 border flex-row justify-between">
            <TextInput
                placeholder="Search a Task"
            ></TextInput>
            <FontAwesome name="search" size={24} color="#1d4ed8" />
        </View>
    );
}