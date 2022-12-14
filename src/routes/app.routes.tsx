import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Greetings } from "../screens/Greetings";
import { Login } from "../screens/Login";
import { Signup } from "../screens/Signup";
import { ErrorSignUp } from "../screens/Errors/ErrorSignUp";
import { ErrorSignUp2 } from "../screens/Errors/ErrorSignUp2";
import { SucessOnSignUp } from "../screens/Sucess/SucessOnSignUp";
import { SucessAddTask } from "../screens/Sucess/SucessAddTask";

import { ErrorWrongPassword } from "../screens/Errors/ErrorWrongPassword";
import { AddTask } from "../screens/AddTask";
import { Details } from "../screens/Details";
import { EditScreen } from "../screens/EditScreen";
import { ErrorValidation } from "../screens/Errors/ErrorValidation";



const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="greetings" component={Greetings} />
            <Screen name="login" component={Login} />
            <Screen name="errorscreen" component={ErrorSignUp} />
            <Screen name="errorvalidation" component={ErrorValidation} />
            <Screen name="errorscreenduplicate" component={ErrorSignUp2} />
            <Screen name="errorwrongpassword" component={ErrorWrongPassword} />
            <Screen name="signup" component={Signup} />
            <Screen name="sucessonsignup" component={SucessOnSignUp} />
            <Screen name="home" component={Home} />
            <Screen name="editionscreen" component={EditScreen} />
            <Screen name="details" component={Details} />
            <Screen name="addtask" component={AddTask} />
            <Screen name="sucessaddtask" component={SucessAddTask} />
        </Navigator>
    );
}