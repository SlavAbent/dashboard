import styled from 'styled-components'

const TodoDropDownComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TodoDropDownDelete = styled.p`
  position: absolute;
  top: -10px;
  right: -15px;
`;

const TodoDropDownInput = styled.input`
  outline: none;
  padding: ${(props) => props.theme.padding.small};
  border-radius: ${(props) => props.theme.decoration.borderRadius.small};
  border: 1px solid ${props => props.theme.colors.darkTheme.grey_dark};
  margin-top: 15px;
  margin-bottom: 10px;
`;

const TodoDropDownButton = styled.button`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.darkTheme.grey_dark};
  background-color: ${props => props.theme.colors.darkTheme.grey_dark};
  padding: ${(props) => props.theme.padding.small};
  border-radius: ${(props) => props.theme.decoration.borderRadius.small};
  color: ${props => props.theme.colors.lightTheme.mainColor};
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;

const TodoDropDownMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TodoDropDownFlexButton = styled.div`
  width: 100%;
`;

export {
  TodoDropDownComponent,
  TodoDropDownDelete,
  TodoDropDownInput,
  TodoDropDownButton,
  TodoDropDownMain,
  TodoDropDownFlexButton,
}
