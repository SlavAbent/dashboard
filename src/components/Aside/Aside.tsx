import React from 'react'
import { Links } from '../../links/Links'
import Logo from '../Icons/Logo/Logo'

import { AsideWrapper } from './Aside.styled'

const Aside = () => {
    return (
        <AsideWrapper>
            <Logo/>
            <Links/>
        </AsideWrapper>
    )
}

export default Aside