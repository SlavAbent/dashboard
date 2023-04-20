import styled from 'styled-components'

export const MainListHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: ${(p) => p.theme.margin.large};
  
`
export const MainListHeaderName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.lighterMain};
  padding: ${props => props.theme.padding.small};
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  position: relative;
`
export const MainListHeaderIcon = styled.div`
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MainListHeaderText = styled.p`
  font-size: 32px;
  margin-right: ${p => p.theme.margin.default};
`

