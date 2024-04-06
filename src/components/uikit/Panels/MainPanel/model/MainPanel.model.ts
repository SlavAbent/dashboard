import { ReactNode } from "react";

export interface MainPanelProps {
  header?: ReactNode | string
  content?: ReactNode
  footer?: ReactNode
  className?: string
  children?: ReactNode
  title?: ReactNode | string
  color?: string
}

interface specPanels {
  icon?: ReactNode
  sizeIcon?: number
  title?: string
  text?: string
}

