import React, { useContext } from 'react'
import { HeaderWrapper,
  HeaderContainer,
  HeaderLeftSide,
  HeaderRightSide,
  HeaderBoardView,
  HeaderFilter,
  HeaderSort,
} from './Header.style'
import { BsFilterRight, BsSortUpAlt, BsViewList } from 'react-icons/bs'
import { ThemeContext } from '../../../../context/themeContext'
import { TodoListContext } from '../../../../context/providers/todoProvider'
import { viewList } from '../../../../redux/actions/todo.actions'

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const { dispatch } = useContext(TodoListContext);
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeftSide>
          <HeaderBoardView
            color={toggleTheme}
            onClick={() => dispatch(viewList(false))}
          >
            <BsViewList/>
            <p>Вид карточек</p>
          </HeaderBoardView>
        </HeaderLeftSide>
        <HeaderRightSide>
          <HeaderFilter color={toggleTheme}>
            <BsFilterRight/>
            <p>Filter</p>
          </HeaderFilter>
          <HeaderSort color={toggleTheme}>
            <BsSortUpAlt/>
            <p>Sort</p>
          </HeaderSort>
        </HeaderRightSide>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
