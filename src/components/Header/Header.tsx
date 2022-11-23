import { Avatar }  from '../uikit/Avatar/';
import { DropDownMenu } from '../uikit/DropDownMenu';
import { HeaderComponent, HeaderTitle, HeaderSearch } from './Header.style'
import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.jpeg'
import React, { useContext, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { TimeDate } from '../Time/Time'
import { ThemeContext } from '../ThemeContainer/context/ThemeContext'

const Header = () => {
    const [activeDropDown, setActiveDropDown] = useState<boolean>(false)
    const { toggleTheme } = useContext(ThemeContext)

    const avatarDropDownMenu = (event: React.MouseEvent) => {
      console.log(event)
        //refactor!
        setActiveDropDown(!activeDropDown)
    }

    const person = 'Slava'

    return (
        <HeaderComponent color={toggleTheme}>
            <HeaderTitle color={toggleTheme}>Welcome back, {person} 💪</HeaderTitle>
            <TimeDate/>
            <HeaderSearch color={toggleTheme}><AiOutlineSearch/></HeaderSearch>
           <>
             {/*<Icon type='svg'/>*/}
             <Avatar
               size={42}
               image={avatar}
               className={'test'}
               title={'test'}
               status={'error'}
               onClick={avatarDropDownMenu}
             />
             <DropDownMenu
               width={104}
               activeDropDown={activeDropDown} // refactor!
               // direction={'topToLeft'}
               transitioned={true}
             >
               <>
                 <Link to="Profile">Profile</Link>
                 <Link to="Logout">Logout</Link>
                 <Link to="Register">Register</Link>
               </>
             </DropDownMenu>
           </>
        </HeaderComponent>
    )
}

export default Header