import { ReactNode } from 'react'

export type DirectionType = 'bottomToLeft'
  | 'bottomToRight'
  | 'topToLeft'
  | 'topToRight'

export interface IDropDownMenuProps {
  color?: string
  visibleDropdownMenu?: boolean
  width?: string | number
  activeDropDown?: boolean
  hovered?: boolean
  direction?: DirectionType | string
  children?: ReactNode
  header?: ReactNode
  footer?: ReactNode
  isHeader?: boolean
  isFooter?: boolean
}
