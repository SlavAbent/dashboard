import React, { DOMAttributes } from 'react'

export type ButtonType = 'button' | 'submit' | 'reset'
export enum ButtonSizeEnum {
  large = 'large',
  default = 'default',
  small = 'small',
}
export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabled?: boolean;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent) => void
  size?: ButtonSizeEnum
}
