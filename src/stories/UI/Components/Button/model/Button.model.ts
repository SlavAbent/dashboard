import React, { DOMAttributes, ReactNode } from 'react'

export type ButtonType = 'button' | 'submit' | 'reset'
export enum ButtonSizeEnum {
  large = 'large',
  default = 'default',
  small = 'small',
}

export enum PositionIconEnum {
  left = 'left',
  right = 'right',
}

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  text?: string
  className?: string;
  isDisabled?: boolean;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent) => void
  size?: ButtonSizeEnum | string
  icon?: ReactNode
  isIcon?: boolean
  iconPosition?: PositionIconEnum | string
}
