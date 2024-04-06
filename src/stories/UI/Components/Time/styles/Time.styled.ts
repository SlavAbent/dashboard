import styled from "styled-components";

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.margin.large};
  transition: .3s;
  p {
    margin-top: 2px;
    margin-bottom: 0;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
    transition: .3s;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
