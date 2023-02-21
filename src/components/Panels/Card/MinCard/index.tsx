import React, { FC } from 'react'
import { MinCardTitle, MinCardWrapper } from './styles/MinCard.styles'
import { IMinCard } from '../types/cards.model'

export const MinCard:FC<Readonly<IMinCard>> = ({
    title,
    className,
    icon,
    onClick,
    children,
  }) => {
  return (
    <>
      <MinCardWrapper
        className={className}
        onClick={onClick}
      >
        <MinCardTitle>{title}</MinCardTitle>
        { children }
      </MinCardWrapper>
      <div>{icon}</div>
    </>
  )
}
