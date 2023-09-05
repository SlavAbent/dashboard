import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    title: "first one",
    cards: [{
      title: "card1",
      date: "5 Jun 2021",
      description: "Desc"
    }]
  },
  {
    title: "second one",
    cards: [{
      title: "card2",
      date: "5 Jun 2021",
      description: "Desc"
    }]
  }
]
export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    onAddKanbanTask: () => {},
    onRemoveKanbanTask: () => {},
    onEditKanbanTask: () => {},
    onDragKanbanTask: () => {},
    onChangeStatusKanbanTask: () => {},
    onDeleteAllKanbanTasks: () => {},
    onAddBoardKanbanTasks: () => {},
    onDeleteBoardKanbanTasks: () => {},
    onEditBoardKanbanTasks: () => {},
    onSortKanbanTasks: () => {},
  }
})

export const {
  onAddKanbanTask,
  onRemoveKanbanTask,
  onEditKanbanTask,
  onDragKanbanTask,
  onChangeStatusKanbanTask,
  onDeleteAllKanbanTasks,
  onAddBoardKanbanTasks,
  onDeleteBoardKanbanTasks,
  onEditBoardKanbanTasks,
  onSortKanbanTasks,
} = kanbanSlice.actions

export default kanbanSlice.reducer
