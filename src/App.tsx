import { Theme } from './styles/Theme'
import ThemeProvider from './context/providers/themeProvider'
import { Provider } from 'react-redux'
import React from 'react'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import { Main } from './Main'

export const App = () => {
  return (
    <Theme>
      <ThemeProvider>
        <Provider store={store}>
          <Main />
          <ToastContainer />
        </Provider>
      </ThemeProvider>
    </Theme>
  )
}

export default App
