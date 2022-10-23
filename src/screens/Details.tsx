import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, ScrollView, Image, Text, View, TouchableOpacity } from "react-native";
import { TitleAndDesc } from "../components/TitleAndDesc";
import { AntDesign, Entypo } from "@expo/vector-icons";
import api from "../services/api";

export function Details(props: any) {

    const navigator = useNavigation()
    const TasksData = props.route.params.data;
    console.log(TasksData)

    const deleteTask = async (id: string) => {
        await api
            .delete(`/task/${id}`)
            .then((response) => navigator.navigate("home"))
            .catch((err) => {
            });
    };

    const editTask = async (id: string) => {
        console.log("Entrou");
        navigator.navigate("editionscreen", {
            id: id,
        });
    };

    return (
        <SafeAreaView className="bg-blue-700 w-full h-full">
            <ScrollView className="px-4">
                <Text className="text-8xl text-white">Here is your task!</Text>

                <View className="my-6 items-center">
                    <Entypo name="chevron-down" size={60} color="white" />
                    <Entypo name="chevron-down" size={60} color="white" />
                    <Entypo name="chevron-down" size={60} color="white" />
                </View>

                <TitleAndDesc
                    Title={TasksData.title}
                    Description={TasksData.description}
                    textColor="text-white text-4xl"
                    className="my-10"
                />
                <Image
                    source={require("../assets/Boy_enjoying_hiking.png")}
                    className="w-80 h-60 mx-auto my-6"
                />
                <View className="flex-row justify-center gap-12 mt-8">
                    <TouchableOpacity onPress={() => {
                        deleteTask(TasksData.id)
                    }}>
                        <AntDesign name="checkcircle" size={60} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        editTask(TasksData.id)
                    }}>
                        <AntDesign name="form" size={60} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}