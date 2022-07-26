import { AppWrapper } from './styles/App.styled'
import Aside from './components/Aside/Aside'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import React from 'react'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { Theme } from './styles/Theme'
import ProjectsAside from './components/Main/ProjectsAside'

const App = () => {
  return (
    <Theme>
      <AppWrapper>
        <BrowserRouter>
          <Aside/>
          <RoutesWrapper/>
          <ProjectsAside/>
          <Header/>
        </BrowserRouter>
      </AppWrapper>
    </Theme>
  );
}

export default App;
