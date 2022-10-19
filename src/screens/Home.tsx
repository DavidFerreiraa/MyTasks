import { SafeAreaView } from "react-native";
import Finder from "../components/Finder";
import { HeaderHome } from "../components/Headers/HeaderHome";

export function Home() {
  return (
    <SafeAreaView>
        <HeaderHome title='MyTasks'/>
        <Finder/>
    </SafeAreaView>
  );
}