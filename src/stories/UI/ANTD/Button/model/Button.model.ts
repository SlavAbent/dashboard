import { ReactNode } from 'react'

export type antdButtonSize = 'large' | 'middle' | 'small'
export type antdButtonType = 'primary' | 'dashed' | 'link' | 'text' | 'default'
export type antdButtonShape = 'default' | 'circle' | 'round'
export enum AntdButtonIconPosition {
  left = 'left',
  right = 'right',
}

export type AntdButtonTextTransform = 'uppercase' | 'lowercase' | 'capitalize'

export interface AntdCustomButtonProps {
  shape?: antdButtonShape
  disable?: boolean
  danger?: boolean
  ghost?: boolean
  href?: string
  size?: antdButtonSize
  onClick?: () => void
  type?: antdButtonType
  defaultIcon?: boolean
  iconPosition?: AntdButtonIconPosition.left
  iconNode?: ReactNode | string
  loading?: boolean
  children?: string | number | ReactNode
  textTransform?: AntdButtonTextTransform
  className?: string
}
