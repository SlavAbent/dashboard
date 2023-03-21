export interface ITodoList {
  id: number,
  title: string,
  date: string,
  completed: boolean,
  description: string,
  index?: number,
}

export interface IInitialState {
  todos: Array<ITodoList>
  isOpenMenu?: boolean
  toggleTodoCards?: boolean
}
