import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

interface TaskProps {
    text: string
    delete: any
    edit: any
    details: any
}

export default function Task(props: TaskProps) {
    return (
        <View className="flex-row justify-between my-1">
            <TouchableOpacity onPress={() => {
                props.details()
            }}>
                <Text>{props.text}</Text>
            </TouchableOpacity>
            <View className="flex-row gap-4">
                <TouchableOpacity onPress={() => {
                    props.delete()
                }}>
                    <MaterialIcons
                        name="highlight-remove"
                        size={26}
                        color="red"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    props.edit()
                }}>
                    <MaterialCommunityIcons
                        name="circle-edit-outline"
                        size={26}
                        color="blue"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}