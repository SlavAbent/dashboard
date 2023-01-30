import styled from 'styled-components'

export const AddListContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }
  span {
    font-size: 16px;
    margin-left: 19px;
  }
`

export const AddListWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const AddListIcon = styled.div`
  margin-right: ${(p) => p.theme.margin.small};
`
export const AddListText = styled.div`
  color: ${(p) => p.theme.colors.lightTheme.mainColor};
`

export const AddListForm = styled.form`
  
`