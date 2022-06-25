import React from 'react';
import styled from 'styled-components'
import male from '../../components/Icons/Person/male.svg'

import  Avatar  from '../UI/uikit/Avatar/Avatar.tsx';

// const UiKit = styled.div``

const UI = () => {
    return (
        <div>
            <Avatar
                image={male}
            />
        </div>
        // <>123</>
    )
}

export default UI