import React, { FC } from 'react'
import {
  TodoCardTitle,
  TodoCardWrapper,
  TodoDateCreate,
  TodoFixNote,
  TodoFooter
} from '../../../../pages/Main/ToDo/Main/Main.style'
import { IMaxCard } from '../types/cards.model'

export const MaxCard:FC<IMaxCard> = ({
    description,
    className,
    onClick,
    title,
    icon,
    date,
    iconFix,
    style
  }) => {
  return (
    <div style={style}>
      <div>
        <TodoCardWrapper
          className={className}
          onClick={onClick}
        >
          <TodoCardTitle>{title}</TodoCardTitle>
          <>{description}</>
        </TodoCardWrapper>
        { icon }
      </div>
      <TodoFooter>
        <TodoDateCreate>{date}</TodoDateCreate>
        <TodoFixNote>
          { iconFix }
        </TodoFixNote>
      </TodoFooter>
    </div>
  )
}

