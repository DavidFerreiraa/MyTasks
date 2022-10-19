import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Finder from "../components/Finder";
import { HeaderHome } from "../components/Headers/HeaderHome";
import Loading from "../components/Loading";
import { TasksProps } from "../interfaces/interfaces";
import api from "../services/api";

export function Home(props: any) {

  const navigator = useNavigation();

  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(()=>{
    api.get(`/task`)
    .then((response) => {
      console.log(response.data)
      setTasks(response.data)
      setLoaded(!loaded)
      console.log(tasks)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])

  return (
      <SafeAreaView className="h-full flex-col">
          <HeaderHome title="MyTasks" />
          <Finder />
          <View>
              {loaded ? (
                  tasks.length === 0 ? (
                      <Text>You don't have any task</Text>
                  ) : (
                      <Loading />
                  )
              ) : (
                  <FlatList
                    data={tasks}
                    renderItem={({item}) => {
                      return(<Text>{item.title}</Text>)
                    }}
                  />
              )}
          </View>
      </SafeAreaView>
  );
}