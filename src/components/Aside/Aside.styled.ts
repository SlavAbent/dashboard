import styled from 'styled-components'

const AsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .3s;
    padding-top: ${(props) => props.theme.padding.default};
    background-color: ${(props) => props.color === 'night' ? props.theme.colors?.lightTheme.mainColor : props.theme.colors?.darkTheme.mainColor};
    position: relative;
    z-index: 1000;
    &.min__menu {
      width: 60px;
    }
    &.full__menu {
      width: 300px;
    }
    
    
`;

export { AsideWrapper }