import styled from 'styled-components'

export const TodoCardTitle = styled.p`
  max-width: 250px;
  font-size: 16px;
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
`;

export const TodoCardDescription = styled.p`
  max-width: 250px;
  font-size: 14px;
`;


export const TodoFixNote = styled.div`
  svg{
    cursor: pointer;
  }
`;
