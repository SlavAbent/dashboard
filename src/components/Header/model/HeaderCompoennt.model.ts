import { ReactNode } from 'react'

export interface IHeaderComponent{
  logo?: ReactNode
  title: string
  date?: ReactNode
  search?: boolean
  content?: ReactNode
  avatar: ReactNode
  color?: string
}
