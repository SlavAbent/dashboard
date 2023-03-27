import React, { ReactNode } from 'react'

import {DropDownMenuWrapper} from './DropDownMenu.style'

export type DirectionType = 'bottomToLeft'
                          | 'bottomToRight'
                          | 'topToLeft'
                          | 'topToRight'

export interface IDropDownMenuProps {
    width?: string | number
    activeDropDown?: boolean
    hovered?: boolean
    transitioned?: boolean
    direction?: DirectionType | string
    children: ReactNode
    header?: ReactNode
    footer?: ReactNode
}

export const DropDownMenu: React.FC<IDropDownMenuProps> = (props) => {
    const { activeDropDown, width = 104, children, direction, footer, header} = props

    const activeDropMenu = activeDropDown ? 'open' : 'close' // if else from direction,transitioned and actived

    return (
      // @ts-ignore
        <DropDownMenuWrapper className={`${direction} ${activeDropMenu}`} width={`${width}px`}>
            {header}
            {children}
            {footer}
        </DropDownMenuWrapper>
    )
}
