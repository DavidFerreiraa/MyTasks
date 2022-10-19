import HeaderLogin from "../components/Headers/HeaderLogin";
import Field from "../components/Field";
import { SafeAreaView, View, Text } from "react-native";
import { useState } from "react";
import axios from 'axios';
import Btn from "../components/Btn";
import { useNavigation } from "@react-navigation/native";

export function Login() {

    const [textFromEmail, setTextFromEmail] = useState<string>("")
    const [textFromPassword, setTextFromPassword] = useState<string>("");

    const navigator = useNavigation()

    return (
        <SafeAreaView>
            <HeaderLogin className="mt-8" />
            <View className="justify-center items-center flex-col px-8 my-64">
                <Field title="email" getValue={setTextFromEmail} />
                <Field title="password" getValue={setTextFromPassword} />
                <Btn
                    btntext="Log in"
                    className="bg-blue-700 mt-12 rounded p-4 items-center justify-center text-white font-extrabold w-full "
                    customfont={false}
                    onPress={() => {
                        axios
                            .post("http://192.168.1.111:3030/auth", {
                                email: textFromEmail,
                                password: textFromPassword,
                            })
                            .then(() => navigator.navigate("home"))
                            .catch((err) => {
                                console.log("Ops! An error ocurred");
                                console.log(err);
                            });
                    }}
                />
                <Btn
                    btntext="Sign up"
                    className="bg-blue-700 mt-12 rounded p-4 items-center justify-center text-white font-extrabold w-full "
                    customfont={false}
                    onPress={() => {
                        navigator.navigate('signup')
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

