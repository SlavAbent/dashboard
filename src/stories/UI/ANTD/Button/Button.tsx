import React, { FC } from 'react'
import { ButtonChildren, ButtonComponent, ButtonIcon, ButtonText } from './styles/antdCustomButton.styled'
import { MdAddTask } from 'react-icons/md'
import { AntdCustomButtonProps } from './model/Button.model'

export const ANTDButton: FC<AntdCustomButtonProps> = (props) => {
  const {
    children,
    onClick,
    iconPosition= 'left',
    defaultIcon,
    iconNode = <MdAddTask />,
    textTransform = 'lowercase',
    className
  } = props

    return (
      <ButtonComponent
        className={className}
        onClick={onClick}
        {...props}
      >
        <ButtonChildren>
          { defaultIcon && (
            <ButtonIcon
              shape={props.shape}
              icon={defaultIcon}
              iconPosition={iconPosition}
            >
                {iconNode}
            </ButtonIcon>
          )}
          {props.shape !== 'circle' && (
            <ButtonText
              iconPosition={iconPosition}
              textTransform={textTransform}
            >
              { children }
            </ButtonText>
          )}
        </ButtonChildren>
      </ButtonComponent>
    )
}
