import styled from 'styled-components'

const AvatarButton = styled.div`
    position: relative;
    cursor: pointer;
`

const AvatarWrapper = styled.div`
    background-color: ${(props) => props.color === 'light' ? props.theme.colors?.darkTheme.mainColor : props.theme.colors?.lightTheme.mainColor};
    border-radius: 50%;
    z-index: 10000;
    overflow: hidden;
`;

const AvatarStatus = styled.div`
    position: absolute;
    top: -4px;
    right: -1px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 1100;
    &.success {
        background-color: ${props => props.theme.colors.lighterGreen};
    }
    &.error {
        background-color: ${props => props.theme.colors.lighterRed};
    }
    &.warning {
        background-color: ${props => props.theme.colors.lighterYellow};
    }
`;

const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    overflow: hidden;
`;

const AvatarFace = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
`;

const AvatarBorder = styled.div`
    position: absolute;
    top: -5px;
    left: -5px;
    right: 0;
    bottom: 0;
    z-index: 1001;
    border-radius: 50%;
    border: 1px solid ${(props) => props.color === 'light' ? props.theme.colors?.darkTheme.mainColor : props.theme.colors?.lightTheme.mainColor};;
`;

const AvatarBorderBox = styled.div`

`;

export {
  AvatarWrapper,
  AvatarImage,
  AvatarButton,
  AvatarFace,
  AvatarBorder,
  AvatarBorderBox,
  AvatarStatus,
}