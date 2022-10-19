import { useNavigation } from "@react-navigation/native";
import { FlatList, SafeAreaView } from "react-native";
import Finder from "../components/Finder";
import { HeaderHome } from "../components/Headers/HeaderHome";

export function Home(props: any) {

  const navigator = useNavigation();
  const userToken = props.route.params.token;

  return (
      <SafeAreaView>
          <HeaderHome title="MyTasks" />
          <Finder />
      </SafeAreaView>
  );
}