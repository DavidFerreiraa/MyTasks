import { SafeAreaView, Image } from "react-native";
import Btn from "../../components/Btn";
import { TitleAndDesc } from "../../components/TitleAndDesc";
import { useNavigation } from "@react-navigation/native";


export function ErrorSignUp2() {

    const navigator = useNavigation();

    return (
        <SafeAreaView className="bg-blue-700 text-6xl text-white h-full items-center justify-center px-12">
            <Image
                source={require("../../assets/Duplicate.png")}
                className="w-60 h-60"
            />
            <TitleAndDesc
                Title="Ops! An error ocurred"
                Description="This email alredy exists, try to log in?"
                textColor="text-white"
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
