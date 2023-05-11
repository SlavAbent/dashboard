import React, { FC, useMemo } from 'react'
import { BadgeContainer } from './styles/Badge.styled'
import { IBadge } from './model/Badge.model'

export const Badge: FC<IBadge> = (
  {
    color,
    size = 8,
    onClick ,
    className
  }
) => {
  const sizeBadge = `${size}px`

  const style = useMemo(() => {
    return { width: sizeBadge, height: sizeBadge }
  }, [sizeBadge]);

  return (
    <BadgeContainer
      className={`${className}${color}` }
      style={style}
      onClick={onClick}
    />
  )
}
