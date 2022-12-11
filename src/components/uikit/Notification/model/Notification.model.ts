import React from 'react'

export type notificationType = 'success' | 'error' | 'warning' | 'default'
export type notificationPositionType =
  'top-left' | 'top-center' | 'top-right' |
  'center-left' | 'center' | 'center-right' |
  'bottom-left' | 'bottom-center' | 'bottom-right'

export interface INotification {
  title: string
  children: string
  className?: string
  timeout?: number
  onClick?: (event: React.MouseEvent) => void
  icon: React.ReactNode
  position: notificationPositionType
  type?: notificationType
}