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
import { Route, useNavigate } from 'react-router-dom';

const App = () => {
  //Todo refactor any
  const [inputValue, setInputValue] = useState('')
  const [selectedColor, selectColor] = useState<any>(3)
  const [colors, setColors] = useState<any>();
  const [lists, setLists] = useState<any>([])
  const [activeItem, setActiveItem] = useState(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // const { data, error, loading } = useFetch('http://localhost:3001/lists?_expand=color&_embed=tasks')

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

  const onAddTask = (listId, taskObj) => {
    const newList = lists.map(item => {
      if (item.id === listId) {
        item.tasks = [...item.tasks, taskObj];
      }
      return item;
    });
    setLists(newList);
  };

  const onEditTask = (listId, taskObj) => {
    const newTaskText = window.prompt('Текст задачи', taskObj.text);

    if (!newTaskText) {
      return;
    }

    const newList = lists.map(list => {
      if (list.id === listId) {
        list.tasks = list.tasks.map(task => {
          if (task.id === taskObj.id) {
            task.text = newTaskText;
          }
          return task;
        });
      }
      return list;
    });
    setLists(newList);
    axios
      .patch('http://localhost:3001/tasks/' + taskObj.id, {
        text: newTaskText
      })
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
  };

  const onRemoveTask = (listId, taskId) => {
    if (window.confirm('Вы действительно хотите удалить задачу?')) {
      const newList = lists.map(item => {
        if (item.id === listId) {
          item.tasks = item.tasks.filter(task => task.id !== taskId);
        }
        return item;
      });
      setLists(newList);
      axios.delete('http://localhost:3001/tasks/' + taskId).catch(() => {
        alert('Не удалось удалить задачу');
      });
    }
  };

  const onCompleteTask = (listId, taskId, completed) => {
    const newList = lists.map(list => {
      if (list.id === listId) {
        list.tasks = list.tasks.map(task => {
          if (task.id === taskId) {
            task.completed = completed;
          }
          return task;
        });
      }
      return list;
    });
    setLists(newList);
    axios
      .patch('http://localhost:3001/tasks/' + taskId, {
        completed
      })
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
  };

  const onEditListTitle = (id, title) => {
    const newList = lists.map(item => {
      if (item.id === id) {
        item.name = title;
      }
      return item;
    });
    setLists(newList);
  };

  return (
    <Provider>
      <Theme>
        <AppWrapper>
          <BrowserRouter>
            <Aside/>
              <RoutesWrapper
                lists={lists}
                onAddTask={onAddTask}
                onEditTitle={onEditListTitle}
                onRemoveTask={onRemoveTask}
                onEditTask={onEditTask}
                onCompleteTask={onCompleteTask}
                withoutEmpty
                activeItem={activeItem}
                setActiveItem={setActiveItem}
              />
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
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
            <Header/>
          </BrowserRouter>
        </AppWrapper>
      </Theme>
    </Provider>
  );
}

export default App;
