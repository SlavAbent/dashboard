export interface TaskCardItem {
  id: string
  Due_Date: string
  Task: string
  Status?: string
  Priority?: string
}

export interface TaskCardProps {
  item: TaskCardItem
  index: number
}

export interface IColumnsFromBackend {
  [x: string]: {
    title: string
    items: TaskCardItem[]
  }
}
