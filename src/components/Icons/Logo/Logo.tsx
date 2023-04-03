import React, { FC } from 'react'
import { IIcon } from '../types'
import { LogoIcon } from './Logo.style'

export const Logo:FC<Partial<IIcon>> = (props) => {
  const { children, size = 16, color, title, onClick} = props

  return (
    <LogoIcon
      size={size}
      color={color}
      title={title}
      onClick={onClick}
    >
      {children}
    </LogoIcon>
  )
}
