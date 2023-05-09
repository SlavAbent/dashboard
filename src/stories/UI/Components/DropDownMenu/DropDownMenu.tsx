import React from 'react'

import { DropDownMenuWrapper } from './styles/DropDownMenu.style'
import { IDropDownMenuProps } from './model/DropDownMenu.model'

export const DropDownMenu: React.FC<IDropDownMenuProps> = (props) => {
    const {
        activeDropDown,
        width = 104,
        children,
        direction,
        footer,
        header,
        isHeader,
        isFooter,
    } = props
    const activeDropMenu = activeDropDown ? 'open' : 'close' // if else from direction,transitioned and actived

    const defaultChildren = 'Lorem ipsum'

    return (
      <>
          { activeDropMenu && (
            <DropDownMenuWrapper className={`${direction} ${activeDropMenu} ${width}px`}>
                <div>{isHeader ?? header}</div>
                {children ?? defaultChildren}
                <div>{isFooter ?? footer}</div>
            </DropDownMenuWrapper>
          ) }
      </>
    )
}
