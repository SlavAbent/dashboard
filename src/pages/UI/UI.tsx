import { Avatar } from '../../components/uikit/Avatar';
import { Button } from '../../components/uikit/Button';
import { Icon } from '../../components/uikit/Icon'
import React from 'react';
import styled from 'styled-components';

const UiKit = styled.div``

const UI = () => {
    
    const handleClick = (event: React.MouseEvent) => {
      console.log(event)
    }

    return (
        <UiKit>
          UI
            {/*<Avatar*/}
            {/*    className="someClass"*/}
            {/*    image=""*/}
            {/*    title="Avatar"     */}
            {/*    size={42}  */}
            {/*/>*/}
            {/*<Button onClick={handleClick}>send</Button>*/}
            {/*<Icon type="svg"/>*/}
        </UiKit>
    )
}

export default UI