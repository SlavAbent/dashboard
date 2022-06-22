import React from 'react';
import { HeaderComponent } from './Header.style'
import person from '../Icons/Person/female.svg'

import Avatar from '../Avatar/Avatar.tsx';

const Header = () => {
    return (
        <HeaderComponent>
            <Avatar
                size={42}
                image={person} 
                className={'test123'}
                title={'Katya'}
                classNameSmallCircle={'test'}
            />
        </HeaderComponent>
    )
}

export default Header