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

  var [tasks, setTasks] = useState<TasksProps[]>([])
  var [loaded, setLoaded] = useState<boolean>(false)
  const refreshValue: number = props.route.params.refresh;

  // useEffect(()=>{
  //   api.get(`/task`)
  //   .then((response) => {
  //     console.log(response.data)
  //     setTasks(response.data)
  //     setLoaded(!loaded)
  //     console.log(tasks)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // },[])

  useEffect(() => {
      api.get(`/task`)
          .then((response) => {
              setTasks(response.data);
              tasks = response.data
              setLoaded(true);
              loaded = true
          })
          .catch((error) => {
              console.log(error);
          });
  }, [refreshValue]);

  return (
      <SafeAreaView className="h-full flex-col">
          <HeaderHome title="MyTasks" />
          <Finder />
          <View>
              {loaded ? (
                  tasks.length === 0 ? (
                      <Text>You don't have any task</Text>
                  ) : (
                    <FlatList
                    data={tasks}
                    renderItem={({item}) => (
                      <Text>{item.title}</Text>
                      )}
                      />
                      )
                      ) : (
                        <Loading />
                        )}
          </View>
      </SafeAreaView>
  );
}