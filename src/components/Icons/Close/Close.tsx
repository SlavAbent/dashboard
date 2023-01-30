import React, { FC } from 'react'
import { CloseIcon } from './Close.styled'
import { IIcon } from '../types'

export const Close: FC<IIcon> = (props) => {
  const { children, size = 16, color, title, } = props

  return (
    <CloseIcon
      size={size}
      color={color}
      title={title}
    >
      {children}
    </CloseIcon>
  )
}