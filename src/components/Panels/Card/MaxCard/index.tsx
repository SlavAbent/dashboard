import React, { FC } from 'react'

import { IMaxCard } from '../types/cards.model'
import {
  TodoCardDescription,
  TodoCardTitle,
  TodoCardWrapper,
  TodoDateCreate,
  TodoFixNote,
  TodoFooter,
  TodoCardInfo,
  TodoCard,
} from './styles/MaxCard.styles'

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
    <TodoCard style={style}>
      <TodoCardInfo>
        <TodoCardWrapper
          className={className}
          onClick={onClick}
        >
          <TodoCardTitle>{title}</TodoCardTitle>
          <TodoCardDescription>{description}</TodoCardDescription>
        </TodoCardWrapper>
        { icon }
      </TodoCardInfo>
      <TodoFooter>
        <TodoDateCreate>{date}</TodoDateCreate>
        <TodoFixNote>
          { iconFix }
        </TodoFixNote>
      </TodoFooter>
    </TodoCard>
  )
}

