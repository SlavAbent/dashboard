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

export const Header = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeftSide>
          <HeaderBoardView color={toggleTheme}>
            <BsViewList/>
            <p>Board view</p>
          </HeaderBoardView>
          {/*<HeaderAddView>add view</HeaderAddView>*/}
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
