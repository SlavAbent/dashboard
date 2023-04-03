import React, { FC } from 'react'
import { IIcon } from '../types'
import { HomeIcon } from './Home.style'

export const Home:FC<Partial<IIcon>> = (props) => {
  const { children, size = 16, color, title } = props

  return (
    <HomeIcon
      size={size}
      color={color}
      title={title}
    >
      {children}
    </HomeIcon>
  )
}
