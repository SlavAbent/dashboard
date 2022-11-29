import { Theme } from './styles/Theme'
import ThemeProvider from './components/ThemeContainer/context/ThemeProvider'
import { AppMainWrapper } from './AppMainWrapper'

const App = () => {
  return (
    <Theme>
      <ThemeProvider>
        <AppMainWrapper />
      </ThemeProvider>
    </Theme>
  );
}

export default App;
