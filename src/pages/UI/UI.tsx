import React from 'react';
import styled from 'styled-components'

import  Avatar  from '../UI/uikit/Avatar';

const UiKit = styled.div``

const UI = () => {
    return (
        <UiKit>
            <Avatar
                className="red"
                image=""
                title="Avatar"     
                size={42}  
            />
        </UiKit>
    )
}

export default UI