import { TasksProps } from "../interfaces/interfaces";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            login: undefined;
            signup: undefined;
            errorscreen: undefined;
            errorscreenduplicate: undefined;
            sucessonsignup: undefined;
            errorwrongpassword: undefined;
            addtask: undefined;
            sucessaddtask: undefined;
            details: {
                data: TasksProps
            }
        }
    }
}