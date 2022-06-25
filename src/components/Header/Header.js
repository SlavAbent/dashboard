import React from 'react';
import { HeaderComponent } from './Header.style'
import person from '../Icons/Person/male.svg'

import Avatar from '../../pages/UI/uikit/Avatar/Avatar.tsx';

const Header = () => {
    return (
        <HeaderComponent>
            <Avatar
                size={42}
                image={person} 
                className={'test123'}
                title={'Katya'}
            />
        </HeaderComponent>
    )
}

export default Header