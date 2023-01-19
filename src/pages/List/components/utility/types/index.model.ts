
export interface IAsideProps {
  data: Array<IList>
  loading?: boolean
  error?: null | any | string
  handleAsideDeleteItem?: (item) => void
}

export interface Tasks {
  completed: boolean
  id: number
  listId: number
  text: string
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
  tasks: Tasks
}