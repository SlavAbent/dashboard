import React, { MouseEventHandler, ReactNode } from 'react'

import {
  ListWrapper,
  ListWrap,
  ListWrapName,
  ListWrapDelete,
  ListWrapIcon,
} from './List.style'
import classNames from 'classnames'
import Badge from '../Badge'
import axios from 'axios'

interface IProps {
  onClick?: (item) => void | MouseEventHandler<HTMLDivElement> | undefined
  onClickItem?: (item) => void
  onRemove?: (item) => void
  items: any[]
  children?: ReactNode
  isRemovable?: boolean
  activeItem: any
}

// Список проектов в сайдбаре

const List = ({ items, onClick, onRemove, isRemovable, onClickItem, activeItem }: IProps) => {
  const removeListSuccess = (item) => {
    if(window.confirm('Точно удалить?')) {
      axios.delete(`http://localhost:3001/lists/` + item.id)
        .then(() => {
          if (onRemove) {
            onRemove(item.id)
          }
        })
    }
  }
  return (
    <ListWrapper onClick={onClick}>
      {items.map((item, index) => {
        return (
          <ListWrap
            key={index}
            className={classNames(item.className, { active: activeItem && activeItem.id === item.id })}
            // @ts-ignore
            onClick={onClickItem ? () => onClickItem(item) : null}
          >
            <ListWrapIcon>
              {item.icon ? item.icon : <Badge color={item.color.name}/>}
            </ListWrapIcon>
            <ListWrapName>
              {item.name}
              {item.tasks && item.tasks.length > 0 && `(${ item.tasks.length })`}
            </ListWrapName>
            { isRemovable && ( <ListWrapDelete onClick={() => removeListSuccess(item)}>x</ListWrapDelete> )}

          </ListWrap>
        )
      })}
    </ListWrapper>
  )
}

export default List
