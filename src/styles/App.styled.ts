import styled from 'styled-components'


const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    opacity: 1;
    transition: .3s;
    background-color: ${(props) => props.color === 'light' ? props.theme.colors?.darkTheme.mainColored : props.theme.colors?.lightTheme.mainColored};
`;

export { AppWrapper }
