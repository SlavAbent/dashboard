import { Avatar }  from '../uikit/Avatar/';
import { DropDownMenu } from '../uikit/DropDownMenu';
import { HeaderComponent, HeaderTitle,HeaderSearch } from './Header.style'
import { Icon } from '../uikit/Icon'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpeg'
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {

    const [activeDropDown, setActiveDropDown] = useState<boolean>(false)

    const avatarDropDownMenu = (event: React.MouseEvent) => {
      console.log(event)
        //refactor!
        setActiveDropDown(!activeDropDown)
    }

    return (
        <HeaderComponent>
            <HeaderTitle>Welcome back, Slava 💪</HeaderTitle>
            <HeaderSearch><AiOutlineSearch/></HeaderSearch>

           <>
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
               activeDropDown={activeDropDown} // refactor!
               // direction={'topToLeft'}
               transitioned={true}
             >
               <>
                 <Link to="Profile">Profile</Link>
                 <Link to="Logout">Logout</Link>
               </>
             </DropDownMenu>
           </>
        </HeaderComponent>
    )
}

export default Header