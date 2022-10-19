import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TitleAndDesc } from "../components/TitleAndDesc";

export function AddTask() {

    const navigator = useNavigation()

    return (
        <SafeAreaView className="w-full h-full bg-blue-700 p-8">
            <TitleAndDesc Title="MyTasks" Description="Add a new task below" className="text-white"/>
        </SafeAreaView>
    )
}