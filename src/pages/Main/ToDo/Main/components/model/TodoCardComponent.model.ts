type OpacityType = 0 | 1 | 0.4

export interface ITodoCard {
  index: number,
  completed: boolean
  handleDeleteTodo: (index: number) => void
  handleToggleTodo: (index: number) => void
  title: string
  date?: string
  description: string
  style: {
    opacity: OpacityType
  }
}
