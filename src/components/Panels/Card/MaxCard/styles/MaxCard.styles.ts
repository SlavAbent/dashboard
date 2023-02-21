import styled from 'styled-components'

export const TodoCardTitle = styled.p`
  max-width: 250px;
  font-size: 16px;
  color: ${props => props.theme.colors.lightTheme.mainColor};
`;

export const TodoCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
export const TodoCard = styled.div`
  width: 100%;
`

export const TodoCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &.completed {
    text-decoration: line-through;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;

export const TodoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const TodoDateCreate = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.lightTheme.mainColored};
`;

export const TodoCardDescription = styled.p`
  max-width: 250px;
  font-size: 14px;
  color: ${props => props.theme.colors.lightTheme.mainColor};
`;


export const TodoFixNote = styled.div`
  svg{
    cursor: pointer;
    color: ${props => props.theme.colors.lightTheme.mainColor};
  }
`;
