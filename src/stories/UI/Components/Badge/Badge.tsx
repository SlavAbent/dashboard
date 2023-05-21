import React, { FC, useMemo } from 'react'
import { BadgeContainer } from './styles/Badge.styled'
import { IBadge } from './model/Badge.model'

export const Badge: FC<IBadge> = (
  {
    id,
    color,
    size = 8,
    onClick ,
    className,
    selectedColor
  }
) => {
  const sizeBadge = `${size}px`

  // TODO add custom checkbox
  // const activeBadge = `${selectedColor === id ? 'active' : 'default'}`

  const style = useMemo(() => {
    return { width: sizeBadge, height: sizeBadge }
  }, [sizeBadge]);

  return (
    <BadgeContainer
      className={`${className}` }
      style={style}
      onClick={onClick}
    />
  )
}
