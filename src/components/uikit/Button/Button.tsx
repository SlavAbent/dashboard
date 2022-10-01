import React, { DOMAttributes } from 'react';

import { ButtonComponent } from './Button.style';
import classnames from 'classnames';

export type ButtonType = 'button' | 'submit' | 'reset'
 
export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
    className?: string;
    isDisabled?: boolean;
    typeButton?: ButtonType;
    onClick?: (event: React.MouseEvent) => void 
}

export const Button: React.FC<IButtonProps> = ({ 
    className,
    children, 
    isDisabled, 
    typeButton, 
    onClick,
    ...rest
}) => {
    return (
        <ButtonComponent className={classnames('Button', className, {
                'Button__disabled': isDisabled,
            })}
            disabled={isDisabled}
            type={typeButton}
            onClick={onClick}
            {...rest}
        >
            <span>{children}</span>
        </ButtonComponent>
    )
}