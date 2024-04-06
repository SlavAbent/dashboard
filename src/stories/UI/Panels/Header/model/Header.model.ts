import { ReactElement } from "react";

export interface HeaderProps {
  color?: string
  title?: boolean
  date?: boolean
  logo?: boolean
  search?: boolean
  avatar?: boolean
  content?: boolean
  personName?: string
  logoContentBody?: ReactElement
  headerContentBody?: ReactElement
  handleToggleMenu?: () => void
}
