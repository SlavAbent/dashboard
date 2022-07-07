import React, { ReactNode } from 'react'

import {DropDownMenuWrapper} from './DropDownMenu.style'

export type DirectionType = 'bottomToLeft' 
                          | 'bottomToRight' 
                          | 'topToLeft' 
                          | 'topToRight'

export interface IDropDownMenuProps {
    activeDropDown?: boolean
    hovered?: boolean
    transitioned?: boolean
    direction?: DirectionType
    children: ReactNode 
}

export const DropDownMenu: React.FC<IDropDownMenuProps> = (
    {   activeDropDown,
      children
    }) => {
        
    const activeDropMenu = activeDropDown ? 'open' : 'close'
    return (
        <DropDownMenuWrapper className={activeDropMenu}>
            {children}
        </DropDownMenuWrapper>
    )
}
