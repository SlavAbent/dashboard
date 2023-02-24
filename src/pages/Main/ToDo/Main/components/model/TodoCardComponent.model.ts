export interface ITodoCard<T> {
  index: number,
  completed: boolean
  handleDeleteTodo: (index: number) => void
  handleToggleTodo: (index: number) => void
  title: string
  date?: string
  description: string
  style: {
    opacity: T
  }
}
