import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Greetings } from "../screens/Greetings";
import { Login } from "../screens/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="greetings" 
                component={Greetings} 
            />
            <Screen
                name="login"
                component={Login}
            />
            <Screen 
                name="home" 
                component={Home} 
            />
        </Navigator>
    )
}