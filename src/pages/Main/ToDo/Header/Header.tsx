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
import { ThemeContext } from '../../../../components/ThemeContainer/context/ThemeContext'
import { TodoListContext } from '../../context/provider/todoProvider'
import { viewList } from '../../context/actions'

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
