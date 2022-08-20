import { AppWrapper } from './styles/App.styled'
import Aside from './components/Aside/Aside'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { Theme } from './styles/Theme'
import ProjectsAside from './components/Main/ProjectsAside'
import Provider from './redux/context/Provider'

const App = () => {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
