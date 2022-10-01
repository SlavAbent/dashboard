import styled from 'styled-components'

const ProjectsAsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100%;
  background-color: ${props => props.theme.colors.darkTheme.grey_darked};
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

export {
  ProjectsAsideContainer,
  AsideThemeProject,
  DarkTheme,
  LightTheme,
  ProjectsAsideWrapper,
  ProjectsAsideTitle,
}