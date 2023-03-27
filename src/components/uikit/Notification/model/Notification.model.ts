import React, { ReactNode } from 'react'

export enum notificationEnum {
  success = 'success',
  error = 'error',
  warning = 'warning',
  default = 'default',
}

export type notificationPositionType =
  'top-left' | 'top-center' | 'top-right' |
  'center-left' | 'center' | 'center-right' |
  'bottom-left' | 'bottom-center' | 'bottom-right'

export interface INotification {
  title?: string
  children?: string | ReactNode
  className?: string
  timeout?: number
  onClick?: (event: React.MouseEvent) => void
  icon?: React.ReactNode
  position?: notificationPositionType
  type?: notificationEnum
}
