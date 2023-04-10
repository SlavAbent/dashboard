import styled from 'styled-components'

export const MainListHeaderContainer = styled.div`
  width: 100%;
`
export const MainListHeaderName = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.lighterMain};
  padding: ${props => props.theme.padding.small};
  border-radius: ${props => props.theme.decoration.borderRadius.default};
`
export const MainListHeaderIcon = styled.div`
  cursor: pointer;
`
export const MainListHeaderText = styled.p`
  font-size: 32px;
  margin-right: ${p => p.theme.margin.default};
`

