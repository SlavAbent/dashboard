import React, { FC } from 'react'
import { DeleteIcon } from './Delete.styled'
import { IIcon } from '../types'

export const Delete: FC<IIcon> = (props) => {
  const { children, size = 16, color, title, onClick} = props

  return (
    <DeleteIcon
      size={size}
      color={color}
      title={title}
      onClick={onClick}
    >
      {children}
    </DeleteIcon>
  )
}
