import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Theme } from './styles/Theme'

import { AppWrapper } from './styles/App.styled'

import { RoutesWrapper } from './routes/RoutesWrapper'
import Aside from './components/Aside/Aside'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Theme>
      <AppWrapper>
        <BrowserRouter>
          <Aside/>
          <RoutesWrapper/>
        </BrowserRouter>
        <Header/>
      </AppWrapper>
    </Theme>
  );
}

export default App;
