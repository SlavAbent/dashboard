import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.visibility {
    opacity: 1;
  }
  &.none{
    opacity: 0;
  }
`

export const LoaderTitle = styled.p`
  font-size: 14px;
`


