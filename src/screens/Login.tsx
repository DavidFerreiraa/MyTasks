import HeaderLogin from "../components/Headers/HeaderLogin";
import Field from "../components/Field";
import { View } from "react-native";
import { UserProps } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import axios from 'axios';

export function Login() {

    const [users, setUsers] = useState<UserProps[]>([])

    useEffect(() => {
        fetch("http://192.168.149.214:3030/users")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <HeaderLogin className="mt-8"/>
            <View className="justify-center my-64">
                <Field title="email"/>
                <Field title="password"/>
            </View>
        </>
    );
}

