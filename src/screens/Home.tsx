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

    var [tasks, setTasks] = useState<TasksProps[]>([]);
    const [filtered, setFiltered] = useState<TasksProps[]>([])
    var [loaded, setLoaded] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");

    const refreshValue: number = props.route.params.refresh;

    console.log(filter);

    useEffect(() => {
        api.get(`/task`)
            .then((response) => {
                setTasks(response.data);
                tasks = response.data;
                setLoaded(true);
                loaded = true;
            })
            .catch((error) => {
                console.log(error);
            });
    }, [refreshValue]);

    useEffect(() => {
    if (filter !== "") {
      let newFiltered: TasksProps[] = [];
      tasks.map((task) => {
        if (task.title.toLowerCase().startsWith(filter.toLowerCase())){
          newFiltered.push(task);
        }
      });
      setFiltered(newFiltered);
    } else {
      if (tasks.length > 0){
        setFiltered(tasks);
      }
    }
  }, [filter]);

    return (
        <SafeAreaView className="h-full flex-col">
            <HeaderHome title="MyTasks" />
            <Finder getValue={setFilter} />
            <View>
                {filter === "" ? (
                    loaded ? (
                        tasks.length === 0 ? (
                            <Text>You don't have any task</Text>
                        ) : (
                            <FlatList
                                data={tasks}
                                renderItem={({ item }) => (
                                    <Text>{item.title}</Text>
                                )}
                            />
                        )
                    ) : (
                        <Loading />
                    )
                ) : (
                    <FlatList
                        data={filtered}
                        renderItem={({ item }) => <Text>{item.title}</Text>}
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
