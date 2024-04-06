import styled from "styled-components/macro";

export const MinCardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: ${props => props.theme.decoration.borderRadius.default};
  box-sizing: border-box;
  &.completed {
    text-decoration: line-through;
  }
`;

export const MinCardTitle = styled.p`
  font-size: 14px;
`;
