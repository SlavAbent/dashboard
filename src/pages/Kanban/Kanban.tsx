import React, { useState } from 'react'
import { MuuriComponent } from "muuri-react";
import { boardOptions, columnOptions, useSend } from './utils'
import { KanbanColumn } from './KanbanColumn';
import { KanbanItem } from './KanbanItem'
import { KanbanMuuriComponent } from './styles/Kanban.styled'


const todos = {
  todo: [
    // {
    //   id: '1',
    //   title: 'test',
    //   description: 'test'
    // },
    // {
    //   id: '2',
    //   title: 'test2',
    //   description: 'test2'
    // },
    '1', '2'
  ],
  working: [],
  done: []
}

export const Kanban = () => {
  const [items, setItems] = useState(todos);

  const onSend = useSend(setItems);

  // Children.
  const children = {
    todo: items.todo.map((id) => <KanbanItem id={id} key={id} />),
    done: items.done.map((id) => <KanbanItem id={id} key={id} />),
    working: items.working.map((id) => <KanbanItem id={id} key={id} />)
  };

  const {todo, done, working} = children

  return (
    <KanbanMuuriComponent {...boardOptions}>
      <KanbanColumn actionClass="todo" title="Задачи">
        <MuuriComponent id={"todo"} onSend={onSend} {...columnOptions}>
          {todo}
        </MuuriComponent>
      </KanbanColumn>
      <KanbanColumn actionClass="working" title="В работе">
        <MuuriComponent id={"working"} onSend={onSend} {...columnOptions}>
          {working}
        </MuuriComponent>
      </KanbanColumn>
      <KanbanColumn actionClass="done" title="Выполнено">
        <MuuriComponent id={"done"} onSend={onSend} {...columnOptions}>
          {done}
        </MuuriComponent>
      </KanbanColumn>
    </KanbanMuuriComponent>
  )
}
