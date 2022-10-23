import { SafeAreaView, Image } from "react-native";
import { TitleAndDesc } from "../../components/TitleAndDesc";

export function ErrorValidation() {
    return (
        <SafeAreaView className="bg-blue-700 text-6xl text-white h-full items-center justify-center">
            <Image
                source={require("../../assets/Tweet_storm.png")}
                className="w-60 h-60"
            />
            <TitleAndDesc
                Title="Ops! An error ocurred"
                Description="Check if you filled all the fields or if you put a valid email"
                textColor="text-white"
            />
        </SafeAreaView>
    );
}
