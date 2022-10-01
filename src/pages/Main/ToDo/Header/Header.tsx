import React from 'react'
import { HeaderWrapper,
  HeaderContainer,
  HeaderLeftSide,
  HeaderRightSide,
  HeaderBoardView,
  HeaderFilter,
  HeaderSort,
} from './Header.style'
import { BsFilterRight, BsSortUpAlt, BsViewList } from 'react-icons/bs'

export const Header = () => {
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