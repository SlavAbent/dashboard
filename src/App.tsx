import { Theme } from './styles/Theme'
import Provider from './redux/context/Provider'
import ThemeProvider from './components/ThemeContainer/context/ThemeProvider'
import { AppMainWrapper } from './AppMainWrapper'

const App = () => {
  return (
    <Provider>
      <Theme>
        <ThemeProvider>
          <AppMainWrapper />
        </ThemeProvider>
      </Theme>
    </Provider>
  );
}

export default App;
