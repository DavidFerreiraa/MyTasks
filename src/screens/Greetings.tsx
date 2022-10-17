import { useNavigation } from "@react-navigation/native";
import { Image, SafeAreaView, StatusBar } from "react-native";
import Btn from "../components/Btn";
import { Header } from "../components/Headers/Header";
import { TitleAndDesc } from "../components/TitleAndDesc";

export function Greetings() {

    const navigation = useNavigation();

    return (
        <SafeAreaView className="flex-col items-center">
            <Header title="MyTasks" />
            <Image
                source={require("../assets/Write.png")}
                className="w-60 h-60 my-16"
            ></Image>
            <TitleAndDesc
                Title="Welcome to your tasks!"
                Description="It's your first day here? Don't worry the app is super easy to use."
            />
            <Btn
                className="bg-blue-500 px-16 py-4 rounded mt-28"
                btntext="Get started"
                onPress={() => {
                    navigation.navigate('home')
                }}
            />

            <StatusBar barStyle="light-content" backgroundColor="#1d4ed8" />
        </SafeAreaView>
    );
}
