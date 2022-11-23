import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: calc(100vh - 130px);
  overflow: hidden;
  transition: .3s;
  background-color: ${(props) => props.color === 'light' ? props.theme.colors?.darkTheme.mainColored : props.theme.colors?.lightTheme.mainColored};
  border-radius: ${props => props.theme.padding.default};
`;

const MainContainerListAside = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 350px;
  height: calc(100vh - 130px);
  overflow: hidden;
  background-color: ${props => props.theme.colors.darkTheme.grey_smallDark};
  border-radius: ${props => props.theme.padding.default};
`;

const MainWrapper = styled.div`
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: ${props => props.theme.decoration.borderRadius.large};
  margin-right: 10px;
  padding-right: 5px; 
  border-radius: ${props => props.theme.padding.default};
  background-color: ${props => props.theme.colors.darkTheme.grey_dark};
`;

const MainWrapperTodo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const MainWrapperContent = styled.div`
  height: calc(100vh - 130px);
  overflow-y: scroll;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.lighterRed};;
    border-radius: 50px;
  }
  
  &.bigTodoTask{
    div {
      display: flex;
      align-items: center;
    }
    p {
      flex-grow: 1;
      color: white;
    }
    span {
      color: white;
    }
  }
`

const TodoCount = styled.p`
  color: ${props => props.theme.colors.lightTheme.mainColor};
  font-size: 18px;
`;

const TodoAddNewTask = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
  &.bigTodo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TodoNewTaskTitle = styled.p`
  color: ${props => props.theme.colors.lightTheme.mainColor};
`;

const TodoCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: ${props => props.theme.padding.small};
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  background-color: ${props => props.theme.colors.darkTheme.grey_darked};
  box-sizing: border-box;
`;

const TodoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

const TodoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &.completed {
    text-decoration: line-through;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

const TodoCardTitle = styled.p`
  max-width: 250px;
  font-size: 16px;
  color: ${props => props.theme.colors.lightTheme.mainColor};
`;

const TodoCardDescription = styled.p`
  max-width: 250px;
  font-size: 14px;
  color: ${props => props.theme.colors.lightTheme.mainColor};
`;

const TodoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const TodoDateCreate = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.lightTheme.mainColored};
`;

const TodoFixNote = styled.div`
  svg{
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;


export {
  MainContainer,
  MainWrapper,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
  TodoCard,
  TodoCardContainer,
  TodoCardWrapper,
  TodoCardTitle,
  TodoCardDescription,
  TodoDateCreate,
  TodoFixNote,
  TodoFooter,
  MainWrapperContent,
  MainContainerListAside,
}
