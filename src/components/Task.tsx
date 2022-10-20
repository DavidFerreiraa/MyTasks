import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TaskData, TasksProps } from "../interfaces/interfaces";
import { useNavigation } from "@react-navigation/native";

export default function Task(props: TaskData) {

    const navigator = useNavigation()

    function getDetails(data: TasksProps){
        console.log(data)
        navigator.navigate("details", {
            data: {...data}
        })
    }

    return (
        <View className="flex-row justify-between my-1">
            <TouchableOpacity onPress={() => {
                getDetails(props.data)
            }}>
                <Text>{props.data.title}</Text>
            </TouchableOpacity>
            <View className="flex-row gap-4">
                <TouchableOpacity onPress={() => {
                     props.handleDelete(props.data.id)
                }}>
                    <MaterialIcons
                        name="highlight-remove"
                        size={26}
                        color="red"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    
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