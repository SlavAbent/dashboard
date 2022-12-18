import styled from 'styled-components'


export const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    opacity: 1;
    transition: .3s;
    background-color: ${(props) => props.color === 'light' ? props.theme.colors?.darkTheme.mainColored : props.theme.colors?.lightTheme.mainColored};
`;

export const AppMainFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: calc(100% - 92px);
  //Todo fix width params
  //width: calc(100% - 332px);
`;

