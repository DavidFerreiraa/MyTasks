import HeaderLogin from "../components/Headers/HeaderLogin";
import Field from "../components/Field";
import { SafeAreaView, View } from "react-native";
import { useState } from "react";
import Btn from "../components/Btn";
import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export function Login() {

    const [textFromEmail, setTextFromEmail] = useState<string>("")
    const [textFromPassword, setTextFromPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const navigator = useNavigation()

    return (
        <SafeAreaView>
            <HeaderLogin className="mt-8" />
            <View className="justify-center items-center flex-col px-8 my-64">
                <Field title="email" getValue={setTextFromEmail} />
                <Field title="password" getValue={setTextFromPassword} />
                <Btn
                    btntext="Log in"
                    className="bg-blue-700 mt-12 rounded p-4 items-center justify-center flex-row font-extrabold w-full "
                    customfont={false}
                    textColor="text-white"
                    onPress={() => {
                        setLoading(true)
                        api
                            .post(`/auth`, {
                                email: textFromEmail,
                                password: textFromPassword,
                            })
                            .then((response: any) => {
                                setLoading(false)
                                api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                                navigator.navigate("home", {
                                    refresh: 0
                                });
                            })
                            .catch((err: Error) => {
                                setLoading(false)
                                navigator.navigate("errorwrongpassword");
                            });
                    }}
                    loadingIcon={loading}
                />
                <Btn
                    btntext="Sign up"
                    className="bg-blue-700 mt-12 rounded p-4 items-center justify-center text-white font-extrabold w-full "
                    customfont={false}
                    textColor="text-white"
                    onPress={() => {
                        navigator.navigate('signup')
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

