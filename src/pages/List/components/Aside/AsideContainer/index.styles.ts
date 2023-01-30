import styled from 'styled-components'

export const AsideRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(p) => p.theme.margin.default};
`

export const AsideContain = styled.div`
`

export const AsideRowEdit = styled.div`
  margin-right:${(p) => p.theme.margin.small};
`

export const AsideRowText = styled.p`
  display: flex;
  flex-grow: 1;
  color: ${(p) => p.theme.colors.lightTheme.mainColor};
`

export const AsideRowWrapper = styled.div`
`