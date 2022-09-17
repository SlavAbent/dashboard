import { AppWrapper } from './styles/App.styled'
import Aside from './components/Aside/Aside'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { RoutesWrapper } from './routes/RoutesWrapper'
import { Theme } from './styles/Theme'
import ProjectsAside from './pages/Main/ProjectsAside'
import Provider from './redux/context/Provider'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  //Todo refactor any
  const [inputValue, setInputValue] = useState('')
  const [selectedColor, selectColor] = useState<any>(3)
  const [colors, setColors] = useState<any>();
  const [lists, setLists] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)



  // const { data, error, loading } = useFetch('http://localhost:3001/lists?_expand=color&_embed=tasks')
  // // console.log(data)
  // setLists(data);
  // console.log(lists)
  // setColors(data);

  useEffect(() => {
    axios
      .get('http://localhost:3001/lists?_expand=color&_embed=tasks')
      .then(({ data }) => {
        setLists(data);
      });
    axios.get('http://localhost:3001/colors').then(({ data }) => {
      setColors(data);
    });
  }, []);

  useEffect(() => {
    if (Array.isArray(colors)) {
      selectColor(colors[0].id);
    }
  }, [colors]);

  const onAddList = (obj: any) => {
    const newList = [
      ...lists,
      obj
    ]
    setLists(newList)
  }

  const addList = () => {
    if( !inputValue ) {
      alert('Введите название списка!')
      return
    }
    const color = colors.filter(c => c.id === selectedColor)[0].name
    setIsLoading(true)
    axios.post('http://localhost:3001/lists', {
      name: inputValue,
      colorId: selectedColor
    }).then(({data}) => {
      const listObj = {...data, color: { name: color }}
      onAddList(listObj)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <Provider>
      <Theme>
        <AppWrapper>
          <BrowserRouter>
            <Aside/>
            <RoutesWrapper lists={lists}/>
            <ProjectsAside
              setInputValue={setInputValue}
              inputValue={inputValue}
              colors={colors}
              selectColor={selectColor}
              selectedColor={selectedColor}
              addList={addList}
              isLoading={isLoading}
              lists={lists}
              setLists={setLists}
            />
            <Header/>
          </BrowserRouter>
        </AppWrapper>
      </Theme>
    </Provider>
  );
}

export default App;
