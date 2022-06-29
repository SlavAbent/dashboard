import { Avatar } from '../../components/uikit/Avatar';
import { Button } from '../../components/uikit/Button';
import React from 'react';
import styled from 'styled-components';

const UiKit = styled.div``



const UI = () => {
    
    const handleClick = (event: React.MouseEvent) => {
        alert('test'); 
    }

    return (
        <UiKit>
            <Avatar
                className="red"
                image=""
                title="Avatar"     
                size={42}  
            />
            <Button onClick={handleClick}>send</Button>
        </UiKit>
    )
}

export default UI