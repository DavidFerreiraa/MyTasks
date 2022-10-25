import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import Finder from "../components/Finder";
import { HeaderHome } from "../components/Headers/HeaderHome";
import Loading from "../components/Loading";
import Task from "../components/Task";
import { TasksProps } from "../interfaces/interfaces";
import api from "../services/api";

export function Home() {

    const navigator = useNavigation();

    const isFocused = useIsFocused()
    var [tasks, setTasks] = useState<TasksProps[]>([]);
    const [filtered, setFiltered] = useState<TasksProps[]>([])
    var [loaded, setLoaded] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("");

    const getTasksFromAPI = async () => {
        await api.get(`/task`)
            .then((response) => {
                setTasks(response.data);
                tasks = response.data;
                setLoaded(true);
                loaded = true;
                return;
            })
            .catch((error) => {
                console.log(error);
                return;
            });
    }

    const getFiltered = () => {
        let newFiltered: TasksProps[] = [];
        tasks.map((task) => {
            if (task.title.toLowerCase().startsWith(filter.toLowerCase())) {
                newFiltered.push(task);
            }
        });
        setFiltered(newFiltered);
    }
    const deleteTask = async (id: string) => {
        await api.delete(`/task/${id}`)
        .then((response) => 
            response && getTasksFromAPI()
        )
        .catch((err) => {
            console.log(err)
        });
        getTasksFromAPI()
        getFiltered()
    }

    const editTask = async (id: string) => {
        navigator.navigate("editionscreen", {
            id: id,
        })
    }

    useEffect(() => {
        getTasksFromAPI()
    }, [isFocused]);

    useEffect(() => {
    if (filter != "") {
      getFiltered()
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
            <View className="px-4">
                {filter === "" ? (
                    loaded ? (
                        tasks.length === 0 ? (
                            <Text>You don't have any task</Text>
                        ) : (
                            <FlatList
                                data={tasks}
                                renderItem={({ item }) => (
                                    <Task
                                        data={item}
                                        handleDelete={deleteTask}
                                        handleEdit={editTask}
                                    />
                                )}
                                className="w-full"
                            />
                        )
                    ) : (
                        <Loading />
                    )
                ) : (
                    <FlatList
                        data={filtered}
                        renderItem={({ item }) => (
                            <Task
                                data={item}
                                handleDelete={deleteTask}
                                handleEdit={editTask}
                            />
                        )}
                        className="w-full"
                    />
                )}
            </View>
        </SafeAreaView>
    );
}
