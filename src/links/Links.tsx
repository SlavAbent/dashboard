import React from 'react';

import { BsChatDots, BsMap } from "react-icons/bs";
import { IoIosQrScanner, IoIosKeypad, IoIosContact } from "react-icons/io";

import { LinksContainer, LinkAnchor } from './Links.style'

export const Links = () => {
    return  (
        <LinksContainer>
            <LinkAnchor to="/"><IoIosKeypad/></LinkAnchor>
            <LinkAnchor to="UI"><IoIosQrScanner/></LinkAnchor>
            <LinkAnchor to="Chat"><BsChatDots/></LinkAnchor>
            <LinkAnchor to="Profile"><IoIosContact/></LinkAnchor>
            <LinkAnchor to="Map"><BsMap/></LinkAnchor>
        </LinksContainer>
    )
}