import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import Field from "../components/Field";
import { TitleAndDesc } from "../components/TitleAndDesc";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "../components/Btn";

export function AddTask() {

    const navigator = useNavigation()

    const [timePicker, showTimePicker] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    var [date, setDate] = useState<Date>(new Date())

    return (
        <SafeAreaView className="w-full h-full bg-blue-700 p-8">
            <TitleAndDesc
                Title="MyTasks"
                Description="Add a new task below"
                textColor="text-white"
                className="mb-20"
            />
            <Field
                title="Add task title"
                getValue={setTitle}
                className="bg-white"
                textColor="text-white"
            />
            <Field
                title="Add task description"
                getValue={setDesc}
                className="bg-white h-32"
                textColor="text-white"
                multiline={true}
            />
            <Btn
                btntext="Set initial time"
                className="w-full bg-blue-300 p-4"
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
                    onChange={async (event, dateChanged) => {if (dateChanged) {
                        await setDate(dateChanged)
                        let tempDate = dateChanged
                        let fTime = `${tempDate.getHours()}:${tempDate.getMinutes()}`
                        showTimePicker(!timePicker)
                    }
                console.log(date)
                }}
                />
            )}
        </SafeAreaView>
    );
}