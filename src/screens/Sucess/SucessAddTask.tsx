import { SafeAreaView, Image } from "react-native";
import { TitleAndDesc } from "../../components/TitleAndDesc";
import Btn from "../../components/Btn";
import { useNavigation } from "@react-navigation/native";


export function SucessAddTask() {

    const navigator = useNavigation()

    navigator.addListener("beforeRemove", (e) => {
        e.preventDefault()
    })

    return (
        <SafeAreaView className="bg-blue-700 text-6xl text-white h-full items-center justify-center px-12">
            <Image
                source={require("../../assets/Hot_beverage.png")}
                className="w-60 h-60"
            />
            <TitleAndDesc
                Title="Sucess!!!"
                Description="Go back to see your own tasks"
                textColor="text-white"
            />
            <Btn
                btntext="Go to home screen"
                className="bg-white mt-12 rounded p-4 items-center justify-center text-white font-extrabold w-full "
                customfont={false}
                onPress={() => {
                    navigator.navigate("home", {
                        refresh: 1
                    });
                }}
            />
        </SafeAreaView>
    );
}
