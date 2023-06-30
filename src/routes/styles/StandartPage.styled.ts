import styled from 'styled-components'

export const StandartPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
export const StandartPageInfo = styled.p`
  text-align: center;
  color: ${(p) => p.theme.colors.mainColor};
  margin-bottom: 4px;
`
export const StandartPageLink = styled.a`
  color: ${(p) => p.theme.colors.mainColor};
  text-decoration: none;
`
