import React, { ReactNode } from 'react'

import {
  ListWrapper,
  ListWrap,
  ListWrapColor,
  ListWrapName,
  ListWrapDelete,
  ListWrapIcon,
} from './List.style'
import classNames from 'classnames'
import Badge from '../Badge'

interface  IProps {
  onClick?: () => void
  onRemove?: (item) => void
  items: any[]
  children?: ReactNode
  setActiveDropDown?: any
  isRemovable?: boolean
}

const List = ({ items, onClick, onRemove, isRemovable }: IProps) => {
  const removeListSuccess = (item) => {
    if(window.confirm('Точно удалить?')) {
      if (onRemove) {
        onRemove(item)
      }
    }
  }
  return (
    <ListWrapper onClick={onClick}>
      {items.map((item, index) => {
        return (
          <ListWrap
            key={index}
            className={classNames(item.className, { active: item.active })}
          >
            <ListWrapIcon>
              {item.icon ? item.icon : <Badge color={item.color}/>}
            </ListWrapIcon>
            <ListWrapName>{item.name}</ListWrapName>
            { isRemovable && ( <ListWrapDelete onClick={() => removeListSuccess(item)}>x</ListWrapDelete> )}

          </ListWrap>
        )
      })}
    </ListWrapper>
  )
}

export default List