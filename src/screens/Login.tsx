import HeaderLogin from "../components/Headers/HeaderLogin";
import Field from "../components/Field";
import { SafeAreaView, View } from "react-native";
import { useState } from "react";
import Btn from "../components/Btn";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

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
                        api
                            .post(`/auth`, {
                                email: textFromEmail,
                                password: textFromPassword,
                            })
                            .then((response) => {
                                navigator.navigate("home", {
                                    token: response.data.token,
                                });
                            })
                            .catch((err) => {
                                navigator.navigate("errorwrongpassword");
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

