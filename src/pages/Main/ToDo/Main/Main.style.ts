import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: calc(100vh - 130px);
  overflow: hidden;
  transition: .3s;
  border-radius: ${props => props.theme.padding.default};
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
  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.lighterRed};
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
  font-size: 18px;
`;

const TodoAddNewTask = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 5px;
  }
  &.bigTodo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TodoAddNew = styled.div`
  display: flex;
  align-items: center;
`

const TodoNewTaskTitle = styled.p``;

const TodoCard = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  padding: ${props => props.theme.padding.small};
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  background-color: ${(props) => props.color === 'light' ? props.theme.colors?.lightTheme.mainColored : props.theme.colors?.darkTheme.mainColored};
  box-sizing: border-box;
`;

const TodoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;


export {
  MainContainer,
  MainWrapperTodo,
  TodoCount,
  TodoAddNewTask,
  TodoNewTaskTitle,
  TodoCard,
  TodoCardContainer,
  MainWrapperContent,
  TodoAddNew,
}
