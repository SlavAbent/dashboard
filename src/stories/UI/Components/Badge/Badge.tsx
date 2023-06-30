import React, { FC, memo, useMemo } from 'react'
import { BadgeContainer } from './styles/Badge.styled'
import { IBadge } from './model/Badge.model'

export const Badge: FC<IBadge> = memo((
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

  const activeBadge = `${selectedColor === id ? 'active' : 'default'}`

  const style = useMemo(() => {
    return { width: sizeBadge, height: sizeBadge }
  }, [sizeBadge]);

  return (
    <BadgeContainer
      className={`${className} ${activeBadge} ${color}` }
      style={style}
      onClick={onClick}
    />
  )
})
