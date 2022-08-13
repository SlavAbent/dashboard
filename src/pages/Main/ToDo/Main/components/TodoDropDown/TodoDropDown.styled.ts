import styled from 'styled-components'

const TodoDropDown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TodoDropDownDelete = styled.p`
  position: absolute;
  top: 50px;
  right: 5px;
`;

const TodoDropDownInput = styled.input`
  outline: none;
  border: 1px solid ${props => props.theme.colors.lighterRed};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const TodoDropDownButton = styled.button`
  width: auto;
  border: 1px solid ${props => props.theme.colors.lighterRed};
  background-color: ${props => props.theme.colors.lighterRed};
  color: ${props => props.theme.colors.lightTheme.mainColor};
  box-sizing: border-box;

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
  TodoDropDown,
  TodoDropDownDelete,
  TodoDropDownInput,
  TodoDropDownButton,
  TodoDropDownMain,
  TodoDropDownFlexButton,
}