import { Theme } from './styles/Theme'
import ThemeProvider from './context/providers/themeProvider'
import { AppMainFields, AppWrapper, AsideWrapper, AsideWrap } from './styles/App.styled'
import { HashRouter } from 'react-router-dom'
import { Aside } from './components/Panels/Aside/Aside'
import { HeaderComponent } from './components/Header'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { Provider } from 'react-redux'
import React, { useContext } from 'react'
import { ThemeContext } from './context/themeContext'
import store from './redux/store'

const MainComponent = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <AppWrapper color={toggleTheme}>
      <HashRouter>
        <AppMainFields>
          <AsideWrapper>
            <HeaderComponent />
            <AsideWrap>
              <Aside/>
              <RoutesWrapper/>
            </AsideWrap>
          </AsideWrapper>
        </AppMainFields>
      </HashRouter>
    </AppWrapper>
  )
}

export const App = () => {
  return (
    <Theme>
      <ThemeProvider>
        <Provider store={store}>
          <MainComponent />
        </Provider>
      </ThemeProvider>
    </Theme>
  );
}

export default App;
