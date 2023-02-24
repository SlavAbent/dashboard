import React, { FC } from 'react'
import { IIcon } from '../types'
import { LogoIcon } from './Logo.style'

const Logo:FC<Partial<IIcon>> = (props) => {
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

export default Logo
