import { SafeAreaView, Image } from "react-native";
import { TitleAndDesc } from "../../components/TitleAndDesc";
import Btn from "../../components/Btn";
import { useNavigation } from "@react-navigation/native";

export function SucessOnSignUp() {

    const navigator = useNavigation();

    return (
        <SafeAreaView className="bg-blue-700 text-6xl text-white h-full items-center justify-center px-12">
            <Image
                source={require("../../assets/Hot_beverage.png")}
                className="w-60 h-60"
            />
            <TitleAndDesc
                Title="Sucess!!!"
                Description="Now you can use MyTasks! I hope you enjoy it"
                className="text-white"
            />
            <Btn
                btntext="Go to log in screen"
                className="bg-white mt-12 rounded p-4 items-center justify-center text-white font-extrabold w-full "
                customfont={false}
                onPress={() => {
                    navigator.navigate("login");
                }}
            />
        </SafeAreaView>
    );
}
