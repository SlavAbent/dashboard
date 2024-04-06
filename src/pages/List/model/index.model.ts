import { Dispatch } from "react";

export interface IListContextData {
  response: Array<IList>
  loading?: boolean
  error?: null | any | string
  setResponse: Dispatch<unknown>
}

export interface IAsideProps {
  data: Array<IList>
  loading?: boolean
  error?: null | any | string
  handleAsideDeleteItem?: (item) => void
  themeColor: string
}

export interface Tasks {
  completed?: boolean
  id: number
  listId: number
  text?: string
}

export interface Colors {
  hex: string
  id: number
  name: string
}

export interface IList {
  id: number
  name: string,
  colorId: number
  color: Colors
  tasks: Tasks[]
}

export interface IColor {
  hex: string
  id: number
  name: string
}
