import { TextInputProps, TouchableOpacityProps, ViewProps } from "react-native"

export interface HeaderProps extends ViewProps {
  title: string
}
export interface FieldProps {
  title: string
  getValue: any
}

export interface TitleAndDescProps extends ViewProps {
    Title: string
    Description: string
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
    customfont: boolean
}
