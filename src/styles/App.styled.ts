import styled from 'styled-components'
import "@fontsource/alef"


export const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    opacity: 1;
    transition: .3s;
    background-color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColored :  props.theme.colors?.darkTheme.mainColored};

    p {
      font-size: 14px;
      color: ${(props) => props.color === 'light' ? props.theme.colors.darkTheme.grey_dark : props.theme.colors.lightTheme.mainColored};
    }
    
    svg {
      color: ${(props) => props.color === 'light' ? props.theme.colors.darkTheme.grey_dark : props.theme.colors.lightTheme.mainColored};
    }
`;

export const AppMainFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;
export const AsideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const AsideWrap = styled.div`
  display: flex;
  height: 100vh;
`
