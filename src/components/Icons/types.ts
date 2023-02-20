import React from 'react'

export type sizeBox = 'small' | 'default' | 'defaultBig' | 'big'
export interface IIcon {
  children?: React.ReactNode;
  size?: sizeBox | number;
  color?: string;
  title?: string;
  onClick?: (event: React.MouseEvent) => void
}
