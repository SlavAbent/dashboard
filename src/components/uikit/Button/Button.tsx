import React, { DOMAttributes } from 'react';

import { ButtonComponent } from './Button.style';
import classnames from 'classnames';

export type ButtonType = 'button' | 'submit' | 'reset'
 
export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
    className?: string;
    isDisabled?: boolean;
    type?: ButtonType;
    onClick?: (event: React.MouseEvent) => void 
}


// Todo add icon, size

export const Button: React.FC<IButtonProps> = ({ 
    className,
    children, 
    isDisabled,
    type,
    onClick,
    ...rest
}) => {
    return (
        <ButtonComponent className={classnames('Button', className, {
                'Button__disabled': isDisabled,
            })}
            disabled={isDisabled}
            type={type}
            onClick={onClick}
            {...rest}
        >
            <span>{children}</span>
        </ButtonComponent>
    )
}