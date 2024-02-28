import styled from 'styled-components'
import "@fontsource/alef"

export const AppWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    opacity: 1;
    transition: .3s;
    background-color: ${(p) => p.color === 'light' ? p.theme.colors?.lightTheme.mainColor :  p.theme.colors?.darkTheme.mainColored};

    p {
      font-size: 14px;
      color: ${(p) => p.color === 'light' ? p.theme.colors.darkTheme.grey_dark : p.theme.colors.lightTheme.mainColored};
    }
    
    svg {
      color: ${(p) => p.color === 'light' ? p.theme.colors.darkTheme.grey_dark : p.theme.colors.lightTheme.mainColored};
    }
`;

export const AppMainFields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding: ${(p) => p.theme.padding.default};
`;

export const AsideWrap = styled.div`
  display: flex;
  height: 100vh;
`
