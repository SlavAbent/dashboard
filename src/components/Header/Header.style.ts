import styled from 'styled-components';

const HeaderComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 25px;
    padding: ${props => props.theme.padding.default};
    background-color: ${props => props.theme.colors.grey_darked};
`;

export { HeaderComponent }