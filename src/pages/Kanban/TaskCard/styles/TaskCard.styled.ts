import styled from 'styled-components'

export const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 ${(props) => props.theme.padding.default};
  min-height: 105px;
  border-radius: ${(props) => props.theme.decoration.borderRadius.default};
  max-width: 310px;
  background: white;
  margin-top: ${(props) => props.theme.margin.default};

  .secondary-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
    font-weight: 400px;
    color: ${(props) => props.theme.colors.lightTheme.mainColorDark};
  }
`

export const TaskStatus = styled.span`
  color: ${(props) => props.theme.colors.lightTheme.mainColorDark};
`
