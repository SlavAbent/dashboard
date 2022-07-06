import { Avatar }  from '../uikit/Avatar/';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import { HeaderComponent } from './Header.style'
import { Icon } from '../uikit/Icon/Icon'
import avatar from 'components/uikit/Avatar/avatar.jpeg';
import { useState } from 'react';

const Header = () => {

    const [activeDropDown, setActiveDropDown] = useState<boolean>(false)

    const avatarDropDownMenu = () => {
        setActiveDropDown(activeDropDown => !activeDropDown)
    }

    return (
        <HeaderComponent>
            <Icon type='svg'/>
            <Avatar
                size={42}
                image={avatar} 
                className={'test'}
                title={'test'}
                status={'error'}
                onClick={avatarDropDownMenu}
            />
            <DropDownMenu 
                activeDropDown={activeDropDown}
            />
        </HeaderComponent>
    )
}

export default Header