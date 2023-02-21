import { ReactNode } from 'react'

type OpacityType = 0 | 1 | 0.4
export interface IMinCard {
  title: string
  className?: string,
  onClick: () => void
  icon?: ReactNode
  children?: ReactNode
}

export interface IMaxCard {
  title: string
  className?: string,
  onClick: () => void
  icon: ReactNode
  iconFix?: ReactNode
  date: string | undefined
  description?: string
  style: {
    opacity: OpacityType
  }
}
