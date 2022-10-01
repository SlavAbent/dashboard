import styled from 'styled-components'

export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.theme.margin.large};
  color: ${props => props.theme.colors.lightTheme.mainColor};
  p {
    margin-top: 2px;
    margin-bottom: 0;
  }
  svg {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`