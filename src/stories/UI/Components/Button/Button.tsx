import React, { FC } from 'react'
import cn from 'classnames'

import { ButtonChildren, ButtonComponent, ButtonIcon, ButtonText } from './styles/Button.styled'
import { ButtonSizeEnum, IButtonProps, PositionIconEnum } from './model/Button.model'

export const Button: FC<IButtonProps>  = ({
    text,
    className,
    children,
    isDisabled,
    type,
    onClick,
    size = ButtonSizeEnum.default,
    icon,
    isIcon,
    iconPosition = PositionIconEnum.left,
    onMouseMove,
    onMouseDown,
    // tooltip,
    ...rest
}) => {

    return (
        <ButtonComponent className={cn('button', {
            [`${isDisabled}`]: isDisabled,
            [`${size}`]: size,
            [`${className}`]: className
        })}
         disabled={isDisabled}
         type={type}
         onClick={onClick}
         onMouseMove={onMouseMove}
         onMouseDown={onMouseDown}
         {...rest}
        >
            <ButtonChildren>
                { isIcon && (
                  <ButtonIcon
                    icon={isIcon}
                    iconPosition={iconPosition}>
                      {icon}
                  </ButtonIcon>
                )}
                <ButtonText iconPosition={iconPosition}>{text ?? children}</ButtonText>
            </ButtonChildren>
        </ButtonComponent>
    )
}
