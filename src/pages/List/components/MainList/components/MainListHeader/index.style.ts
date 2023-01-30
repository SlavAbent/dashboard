import styled from 'styled-components'

export const MainListHeaderContainer = styled.div`
  width: 100%;
`
export const MainListHeaderName = styled.div`
  display: flex;
  align-items: center;
`
export const MainListHeaderIcon = styled.div`
  cursor: pointer;
  //opacity: 0;
`
export const MainListHeaderText = styled.p`
  font-size: 32px;
  margin-right: ${p => p.theme.margin.default};
`

