import React from 'react';

import { BsChatDots, BsMap } from "react-icons/bs";
import { IoIosQrScanner, IoIosKeypad, IoIosContact } from "react-icons/io";

import { LinksContainer, LinkAnchor } from './Links.style'

export const Links = () => {
    return  (
        <LinksContainer>
            <LinkAnchor className={({isActive}) => isActive ? ' active' : ''} to="/"><IoIosKeypad/></LinkAnchor>
            <LinkAnchor className={({isActive}) => isActive ? ' active' : ''} to="UI"><IoIosQrScanner/></LinkAnchor>
            <LinkAnchor className={({isActive}) => isActive ? ' active' : ''} to="Chat"><BsChatDots/></LinkAnchor>
            <LinkAnchor className={({isActive}) => isActive ? ' active' : ''} to="Profile"><IoIosContact/></LinkAnchor>
            <LinkAnchor className={({isActive}) => isActive ? ' active' : ''} to="Map"><BsMap/></LinkAnchor>
        </LinksContainer>
    )
}