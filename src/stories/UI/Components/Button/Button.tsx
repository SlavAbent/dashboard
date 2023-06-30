import React from 'react';

import { ButtonComponent } from './styles/Button.styled';
import { ButtonSizeEnum, IButtonProps } from './model/Button.model'

// TODO add icon and classnames

export const Button: React.FC<IButtonProps>  = ({
    text,
    className,
    children,
    isDisabled,
    type,
    onClick,
    size = ButtonSizeEnum.default,
    ...rest
}) => {
    return (
        <ButtonComponent className={`${isDisabled} ${size} ${className}`}
            disabled={isDisabled}
            type={type}
            onClick={onClick}
            {...rest}
        >
            <span>{text ?? children}</span>
        </ButtonComponent>
    )
}
