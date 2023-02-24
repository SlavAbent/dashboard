import React from 'react'

export type sizeBox = 'small' | 'default' | 'defaultBig' | 'big'
export type IIcon = {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  title?: string;
  className?: sizeBox | string;
  onClick?: (event: React.MouseEvent) => void
}
