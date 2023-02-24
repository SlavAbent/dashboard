import { ReactNode } from 'react'
export interface IMinCard {
  title: string
  className?: string,
  onClick: () => void
  icon?: ReactNode
  children?: ReactNode
  color?: string
}

export interface IMaxCard<T> {
  title: string
  className?: string,
  onClick: () => void
  icon: ReactNode
  iconFix?: ReactNode
  date: string | undefined
  description?: string
  color?: string
  style: {
    opacity: T
  }
}
