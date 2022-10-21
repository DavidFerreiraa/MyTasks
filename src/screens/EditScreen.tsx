import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, SafeAreaView, ScrollView } from "react-native";
import Field from "../components/Field";
import { TitleAndDesc } from "../components/TitleAndDesc";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "../components/Btn";
import api from "../services/api";

export function EditScreen(props: any) {
    const navigator = useNavigation();

    const itemId = props.route.params.id
    const [timePicker, showTimePicker] = useState<boolean>(false);
    const [sendBtn, showSendBtn] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [time, setTime] = useState<string>("");

    var [date, setDate] = useState<Date>(new Date());

    const EditTaskOnAPI = async (
        title: string,
        description: string,
        hourStart: string
    ) => {
        await api
            .post(`/task/${itemId}`, {
                title: title,
                description: description,
                hourStart: hourStart,
            })
            .then((response) => {
                navigator.navigate("sucessaddtask");
            });
    };

    return (
        <SafeAreaView className="w-full h-full bg-blue-700">
            <ScrollView className="w-full h-full p-8">
                <TitleAndDesc
                    Title="MyTasks"
                    Description="Edit your task below"
                    textColor="text-white"
                    className="mb-20"
                />
                <Field
                    title="Edit task title"
                    getValue={setTitle}
                    className="bg-white"
                    textColor="text-white"
                />
                <Field
                    title="Edit task description"
                    getValue={setDesc}
                    className="bg-white h-32"
                    textColor="text-white"
                    multiline={true}
                />
                <Btn
                    btntext="Edit initial time"
                    className="w-full bg-blue-300 p-4 rounded mt-8 items-center"
                    onPress={() => {
                        showTimePicker(!timePicker);
                    }}
                />
                {timePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        display="default"
                        mode="time"
                        is24Hour={true}
                        onChange={async (event, dateChanged) => {
                            if (dateChanged) {
                                await setDate(dateChanged);
                                let tempDate = dateChanged;
                                let fTime = `${String(
                                    tempDate.getHours()
                                ).padStart(2, "0")}:${String(
                                    tempDate.getMinutes()
                                ).padStart(2, "0")}`;
                                showTimePicker(!timePicker);
                                showSendBtn(!sendBtn);
                                setTime(fTime);
                            }
                        }}
                    />
                )}
                {sendBtn ? (
                    <Btn
                        btntext="Save task"
                        className="w-full bg-blue-300 p-4 rounded mt-8 items-center"
                        onPress={() => {
                            EditTaskOnAPI(title, desc, time);
                        }}
                    />
                ) : null}
                <Image
                    source={require("../assets/Add_Next_task.png")}
                    className="w-60 h-60 mt-12 mx-auto"
                />
            </ScrollView>
        </SafeAreaView>
    );
}
