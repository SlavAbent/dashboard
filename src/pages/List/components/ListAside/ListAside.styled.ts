import styled from 'styled-components/macro'

const ProjectsAsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: calc(100vh - 130px);
  background-color: ${props => props.theme.colors.darkTheme.grey_darked};
  position: absolute;
  p {
    display: flex;
    flex-grow: 1;
    
  }
`;

const ProjectsAsideTitle = styled.p`
  font-size: 22px;
  color: ${props => props.theme.colors.lightTheme.mainColor};
`;

const ProjectsAsideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  svg {
    width: 25px;
    height: 25px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`

const AsideThemeProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  margin: auto;
  border-radius: 40px;
  background-color: ${props => props.theme.colors.darkTheme.grey_smallDark};
  margin-bottom: 10px;
`;

const DarkTheme = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  p {
    margin-left: 5px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
    margin-top: 0;
    margin-bottom: 0;
  }
  svg {
    fill: ${props => props.theme.colors.lightTheme.mainColor};
  }
  &.active {
    
    border-radius: 40px;
    background-color: ${props => props.theme.colors.darkTheme.grey_dark};
  }
`;

const LightTheme = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  p {
    margin-left: 5px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
    margin-top: 0;
    margin-bottom: 0;
  }
  svg {
    fill: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

const BadgeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export {
  ProjectsAsideContainer,
  AsideThemeProject,
  DarkTheme,
  LightTheme,
  ProjectsAsideWrapper,
  ProjectsAsideTitle,
  BadgeContainer,
}
