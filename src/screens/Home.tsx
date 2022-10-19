import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import Finder from "../components/Finder";
import { HeaderHome } from "../components/Headers/HeaderHome";
import { config } from "../config/default";
import { TasksProps } from "../interfaces/interfaces";
import { api } from "../services/api";

export function Home(props: any) {

  const navigator = useNavigation();
  axios.defaults.headers.common["Authorization"] = props.route.params.token;

  const [tasks, setTasks] = useState<TasksProps[]>([])

  useEffect(()=>{
    api.get(`/task/`)
  },[])

  return (
      <SafeAreaView>
          <HeaderHome title="MyTasks" />
          <Finder />
      </SafeAreaView>
  );
}