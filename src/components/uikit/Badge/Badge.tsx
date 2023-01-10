import React, { FC } from 'react'
import { BadgeContainer } from './Badge.style'

type classNameType = 'active' | 'danger' | 'success' | 'default'

interface IBadge {
  id?: number | string | undefined
  size: number
  color?: string
  className?: classNameType | string
  onClick?: (event: React.MouseEvent) => void
  children?: any
}

export const Badge: FC<IBadge> = (
  {
    id,
    color,
    size = 8,
    onClick ,
    className
  }
) => {
  const sizeBadge = `${size}px`
  return (
    <BadgeContainer
      // TODO сделать норм типизацию этого говна
      // @ts-ignore
      id={id}
      className={`${className} ${color}` }
      style={{width: sizeBadge, height: sizeBadge}}
      onClick={onClick}
    />
  )
}
