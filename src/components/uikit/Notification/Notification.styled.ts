import styled from "styled-components";

export const NotificationWrapper = styled.div`
  position: fixed;
  width: auto;
  min-width: 300px;
  height: auto;
  min-height: 100px;
  padding: ${(p) => p.theme.padding.default};
  box-shadow:  ${(p) => p.theme.decoration.boxShadow.default};
  border-radius: ${(p) => p.theme.decoration.borderRadius.large};
  transition: .3s;
  opacity: 1;
  
  &.hideNotification{
    opacity: 0;
  }
  
  //notification type colors
  &.success {
    background-color: ${(p) => p.theme.colors.lighterGreen};
  };
  &.error {
    background-color: ${(p) => p.theme.colors.lighterRed};
  };
  &.warning {
    background-color: ${(p) => p.theme.colors.lighterYellow};
  };
  &.default {
    background-color: ${(p) => p.theme.colors.lighterMain};
  };
  &.disable {
    background-color: ${(p) => p.theme.colors.disable};
  };
  
  //notification position type
  // top
  &.top-left {
    top: ${(p) => p.theme.margin.large};
    left: ${(p) => p.theme.margin.large};
  }
  &.top-center {
    top: ${(p) => p.theme.margin.large};
    left: 50%;
    transform: translateX(-50%);
  }
  &.top-right {
    top: ${(p) => p.theme.margin.large};
    right: ${(p) => p.theme.margin.large};;
  }
  // center
  &.center-left {
    top: 50%;
    left: ${(p) => p.theme.margin.large};
  }
  &.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.center-right {
    top: 50%;
    right: ${(p) => p.theme.margin.large};
  }
  // bottom
  &.bottom-left {
    bottom: ${(p) => p.theme.margin.large};
    left: ${(p) => p.theme.margin.large};
  }
  &.bottom-center {
    bottom: ${(p) => p.theme.margin.large};
    left: 50%;
    transform: translateX(-50%);
  }
  &.bottom-right {
    bottom: ${(p) => p.theme.margin.large};
    right: ${(p) => p.theme.margin.large};
  }
`;