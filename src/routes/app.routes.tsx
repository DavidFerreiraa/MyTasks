import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Greetings } from "../screens/Greetings";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="greetings" 
                component={Greetings} 
            />
            
            <Screen 
                name="home" 
                component={Home} 
            />
        </Navigator>
    )
}