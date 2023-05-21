import React from 'react'

export type classNameType = 'active' | 'danger' | 'success' | 'default'

export interface IBadge {
  id?: number
  size: number
  color?: string
  className?: classNameType | string
  onClick?: (event: React.MouseEvent) => void
  children?: any
  selectedColor?: number
}
