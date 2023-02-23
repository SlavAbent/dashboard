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

export const MaxCard:FC<Readonly<IMaxCard>> = ({
    description,
    className,
    onClick,
    title,
    icon,
    date,
    iconFix,
    style,
    color
  }) => {
  return (
    <TodoCard style={style} color={color}>
      <TodoCardInfo>
        <TodoCardWrapper
          className={className}

        >
          <TodoCardTitle onClick={onClick}>{title}</TodoCardTitle>
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

