import React from 'react'

import { DropDownMenuWrapper } from './styles/DropDownMenu.style'
import { IDropDownMenuProps } from './model/DropDownMenu.model'

export const DropDownMenu: React.FC<IDropDownMenuProps> = (props) => {
    const {
        color = 'light',
        activeDropDown,
        width = 104,
        children,
        direction,
        footer,
        header,
        isHeader,
        isFooter,
    } = props

    const defaultChildren = 'Lorem ipsum'

    return (
      <>
          { activeDropDown && (
            <DropDownMenuWrapper
              color={color}
              className={`
                  ${direction} 
                  ${activeDropDown} ? 'open' : 'close'
                  ${width}px
              `}
            >
                <div>{isHeader ?? header}</div>
                    <>{children ?? defaultChildren}</>
                <div>{isFooter ?? footer}</div>
            </DropDownMenuWrapper>
          ) }
      </>
    )
}
