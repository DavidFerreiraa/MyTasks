import { SafeAreaView, Image } from "react-native";
import { TitleAndDesc } from "../../components/TitleAndDesc";

export function ErrorSignUp(){
    return (
        <SafeAreaView className="bg-blue-700 text-6xl text-white h-full items-center justify-center">
            <Image
                source={require("../../assets/Tweet_storm.png")}
                className="w-60 h-60"
            />
            <TitleAndDesc
                Title="Ops! An error ocurred"
                Description="Check if your first password is equals to the second"
            />
        </SafeAreaView>
    );
}