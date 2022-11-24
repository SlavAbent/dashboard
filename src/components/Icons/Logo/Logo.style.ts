import styled from 'styled-components'

const IconLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-bottom: 50px;
    transition: .3s;

    svg {
        width: 100%;
        height: 100%;
        color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor}
    }
`;

export { IconLogo }