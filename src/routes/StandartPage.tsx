import React, { FC } from 'react'
import { StandartPageInfo, StandartPageLink, StandartPageWrapper } from './styles/StandartPage.styled'
import { useLocation } from 'react-router'

interface IStandartPage {
  href: string
}

export const StandartPage: FC<IStandartPage> = ({href}) => {
  const { pathname } = useLocation();

  return (
    <>
      { pathname === '/' && (
        <StandartPageWrapper>
          <StandartPageInfo>Перейди на вкладку задач!</StandartPageInfo>
          <StandartPageLink href={href}>тыц!</StandartPageLink>
        </StandartPageWrapper>
      )}
    </>
  )
}

