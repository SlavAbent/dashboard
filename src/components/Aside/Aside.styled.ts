import styled from 'styled-components'

const AsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60px;
    padding: ${props => props.theme.padding.small};
    padding-top: ${props => props.theme.padding.default};
    background-color: ${props => props.theme.colors.darkTheme.grey_dark};
`;

export { AsideWrapper }