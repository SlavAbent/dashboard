import React, { FC } from 'react'
import { PlusIcon } from './Plus.styled'
import { IIcon } from '../types'

export const Plus: FC<IIcon> = (props) => {
  const { children, size = 16, color,title} = props
  return (
    <PlusIcon
      size={size}
      color={color}
      title={title}
    >
      {children}
    </PlusIcon>
  )
}
