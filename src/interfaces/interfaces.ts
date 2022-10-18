import { ViewProps } from "react-native"

export interface HeaderProps extends ViewProps {
  title: string
}
export interface FieldProps extends HeaderProps {

}

export interface TitleAndDescProps {
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
