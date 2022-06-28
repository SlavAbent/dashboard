import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-bottom: 50px;
`;

const LinkAnchor = styled(Link)`
    width: 25px;
    height: 25px;
    margin-bottom: 30px;

    svg {
        width: 100%;
        height: 100%;
        color: ${props => props.theme.colors.lighterBlue}
    }
`;

export { LinksContainer,  LinkAnchor }