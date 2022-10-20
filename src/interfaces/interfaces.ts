import { TextInputProps, TouchableOpacityProps, ViewProps } from "react-native"

export interface HeaderProps extends ViewProps {
  title: string
}
export interface FieldProps extends TextInputProps {
  title: string
  getValue: any
  textColor?: string
}

export interface TitleAndDescProps extends ViewProps {
    Title: string
    Description: string
    textColor?: string
}

export interface UserProps {
  id: string
  email: string
  name: string
  password: string
  _count: {
    tasks: number
  }
}

export interface BtnProps extends TouchableOpacityProps {
    btntext?: string
    plusIcon?: boolean
    loadingIcon?: boolean
    customfont?: boolean
    textColor?: string
}

export interface TasksProps {
  id: string,
  userId: string,
  title: string,
  description: string,
  hourStart: number,
}

export interface TaskData {
    data: TasksProps
}
