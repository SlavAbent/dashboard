import { Theme } from './styles/Theme'
import ThemeProvider from './context/providers/themeProvider'
import { AppMainFields, AppWrapper, AsideWrapper, AsideWrap } from './styles/App.styled'
import { HashRouter } from 'react-router-dom'
import { Aside } from './components/uikit/Panels/Aside/Aside'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { Provider } from 'react-redux'
import React, { useContext } from 'react'
import { ThemeContext } from './context/themeContext'
import store from './redux/store'
import { Header } from './components/uikit/Panels/Header'

const MainComponent = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <AppWrapper color={toggleTheme}>
      <HashRouter>
        <AppMainFields>
          <AsideWrapper>
            <Header
              avatar
              search
              content
              logo
              title
              date
            />
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
