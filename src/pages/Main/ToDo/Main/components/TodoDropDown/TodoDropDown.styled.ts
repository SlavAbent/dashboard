import styled from 'styled-components'

const TodoDropDownComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TodoDropDownDelete = styled.p`
  position: absolute;
  top: -5px;
  right: -5px;
`;

const TodoDropDownInput = styled.input`
  outline: none;
  border: 1px solid ${props => props.theme.colors.lighterRed};
  margin-top: 15px;
  margin-bottom: 10px;
`;

const TodoDropDownButton = styled.button`
  width: auto;
  border: 1px solid ${props => props.theme.colors.lighterRed};
  background-color: ${props => props.theme.colors.lighterRed};
  color: ${props => props.theme.colors.lightTheme.mainColor};
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;

const TodoDropDownMain = styled.div`
  display: flex;
  flex-direction: column;
`;
const TodoDropDownFlexButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export {
  TodoDropDownComponent,
  TodoDropDownDelete,
  TodoDropDownInput,
  TodoDropDownButton,
  TodoDropDownMain,
  TodoDropDownFlexButton,
}