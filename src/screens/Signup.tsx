import HeaderLogin from "../components/Headers/HeaderLogin";
import Field from "../components/Field";
import { SafeAreaView, View, Text } from "react-native";
import { useState } from "react";
import axios from "axios";
import Btn from "../components/Btn";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loading";

export function Signup() {
    const [textFromEmail, setTextFromEmail] = useState<string>("");
    const [textFromPassword, setTextFromPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [otherTextFromPassword, setOtherTextFromPassowrd] = useState<string>("")

    const navigator = useNavigation();

    return (
        <SafeAreaView>
            <HeaderLogin className="mt-8" />
            <View className="justify-center items-center flex-col px-8 my-64">
                <Field title="username" getValue={setUsername} />
                <Field title="email" getValue={setTextFromEmail} />
                <Field title="password" getValue={setTextFromPassword} />
                <Field
                    title="repeat password"
                    getValue={setOtherTextFromPassowrd}
                />
                <Btn
                    btntext="Sign up"
                    className="bg-blue-700 mt-12 rounded p-4 items-center justify-center text-white font-extrabold w-full "
                    customfont={false}
                    onPress={() => {
                        if (textFromPassword === otherTextFromPassword) {
                            axios
                                .post("http://192.168.24.43:3030/users", {
                                    name: username,
                                    email: textFromEmail,
                                    password: textFromPassword,
                                })
                                .then((response) => {
                                    navigator.navigate("sucessonsignup");
                                })
                                .catch((err) => {
                                    navigator.navigate("errorscreenduplicate");
                                });
                        }
                        
                        else if(textFromPassword !== otherTextFromPassword) {
                            navigator.navigate("errorscreen");
                        }

                        return <Loading/>
                    }}
                />
            </View>
        </SafeAreaView>
    );
}
