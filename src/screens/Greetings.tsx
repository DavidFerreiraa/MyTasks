import { Image, SafeAreaView } from "react-native";
import { Header } from "../components/Header";
import { TitleAndDesc } from "../components/TitleAndDesc";

export function Greetings() {
  return (
    <SafeAreaView className="flex-col items-center bg-zinc-900">
      <Header title="MyTasks" btntext="Get Started"/>
      <Image
        source={require("../assets/Write.png")}
        className="w-60 h-60"
      ></Image>
      <TitleAndDesc
        Title="Welcome to your tasks!"
        Description="It's your first day here? Don't worry the app is super easy to use"
      />
    </SafeAreaView>
  );
}
