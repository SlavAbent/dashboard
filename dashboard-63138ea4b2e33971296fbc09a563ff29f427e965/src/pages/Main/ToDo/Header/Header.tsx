import React, { useContext, useState } from 'react'
import { HeaderWrapper,
  HeaderContainer,
  HeaderLeftSide,
  HeaderRightSide,
  HeaderBoardView,
  HeaderFilter,
  HeaderSort,
} from './Header.style'
import { BsFilterRight, BsSortUpAlt, BsViewList } from 'react-icons/bs'
import { TodoListContext } from '../../../../redux/context/Provider'
import { viewList } from '../../../../redux/actions'

export const Header = () => {
  const [minCard, setMinCard] = useState(false)


  const handlerToggleViewTodo = () => setMinCard(!minCard)
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeftSide>
          <HeaderBoardView>
            <BsViewList/>
            <p>Board view</p>
          </HeaderBoardView>
          {/*<HeaderAddView>add view</HeaderAddView>*/}
        </HeaderLeftSide>
        <HeaderRightSide>
          <HeaderFilter>
            <BsFilterRight/>
            <p>Filter</p>
          </HeaderFilter>
          <HeaderSort>
            <BsSortUpAlt/>
            <p>Sort</p>
          </HeaderSort>
        </HeaderRightSide>
      </HeaderContainer>
    </HeaderWrapper>
  )
}