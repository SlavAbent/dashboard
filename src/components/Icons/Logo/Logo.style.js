import styled from 'styled-components'

const IconLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-bottom: 50px;

    svg {
        width: 100%;
        height: 100%;
        color: ${props => props.theme.colors.lighterBlue}
    }
`;

export { IconLogo }