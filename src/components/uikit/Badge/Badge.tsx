import React, { FC } from 'react'
import { BadgeContainer, BadgeWrapper } from './Badge.style'

type classNameType = 'active' | 'danger' | 'success' | 'none'

interface IBadge {
  size: number
  color?: string
  className?: classNameType
  onClick?: (event: React.MouseEvent) => void
}

export const Badge: FC<IBadge> = ({ size = 8, color, onClick , className}) => {
  const sizeBadge = `${size}px`
  return (
    <BadgeContainer
      className={className}
      style={{width: sizeBadge, height: sizeBadge}}
      onClick={onClick}
    >
      <BadgeWrapper color={color}/>
    </BadgeContainer>
  )
}
