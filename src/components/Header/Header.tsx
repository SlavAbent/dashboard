import React from 'react';
import { HeaderComponent } from './Header.style'
// import person from '../Icons/Person/male.svg'

import  Avatar  from '../../pages/UI/uikit/Avatar';

const Header = () => {
    return (
        <HeaderComponent>
            <Avatar
                size={42}
                // image={person} 
                className={'test'}
                title={'test'}
            />
        </HeaderComponent>
    )
}

export default Header