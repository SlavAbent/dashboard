import {DropDownMenuWrapper} from './DropDownMenu.style'
import { Link } from 'react-router-dom'
import React from 'react'

interface IDropDownMenuProps {
    activeDropDown: boolean
}

const DropDownMenu: React.FC<IDropDownMenuProps> = ({activeDropDown}) => {
    return (
        <DropDownMenuWrapper className={activeDropDown ? 'open' : 'close'}>
            <Link to="Profile">Profile</Link>
            <Link to="Logout">Logout</Link>
        </DropDownMenuWrapper>
    )
}

export default DropDownMenu