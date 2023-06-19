import React, { DOMAttributes } from 'react'

export type ButtonType = 'button' | 'submit' | 'reset'
export enum ButtonSizeEnum {
  large = 'large',
  default = 'default',
  small = 'small',
}
export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  text?: string
  className?: string;
  isDisabled?: boolean;
  type?: ButtonType;
  onClick?: (event: React.MouseEvent) => void
  size?: ButtonSizeEnum | string
}
