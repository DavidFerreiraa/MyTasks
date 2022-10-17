import { Image, SafeAreaView, StatusBar } from "react-native";
import { Header } from "../components/Header";
import { TitleAndDesc } from "../components/TitleAndDesc";

export function Greetings() {
  return (
    <SafeAreaView className="flex-col items-center">
      <Header title="MyTasks"/>
      <Image
        source={require("../assets/Write.png")}
        className="w-60 h-60 my-16"
      ></Image>
      <TitleAndDesc
        Title="Welcome to your tasks!"
        Description="It's your first day here? Don't worry the app is super easy to use."
      />

      <StatusBar
        barStyle="light-content"
        backgroundColor="#1d4ed8"
      />
    </SafeAreaView>
  );
}
