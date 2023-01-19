import React, { FC } from 'react'
import { EditIcon } from './Edit.styled'
import { IIcon } from '../types'

export const Edit: FC<IIcon> = (props) => {
  const { children, size = 16, color, title} = props


  return (
    <EditIcon
      size={size}
      color={color}
      title={title}
    >
      {children}
    </EditIcon>
  )
}