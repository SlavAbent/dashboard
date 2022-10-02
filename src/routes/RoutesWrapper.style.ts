import styled from 'styled-components/macro';

const baseStyledRoutes = `
  display: flex;
  align-items: flex-start;
  position: absolute;
  top: 60px;
  
  height: calc(100% - 58px);
`

const RoutesComponent = styled.div`
  ${baseStyledRoutes};
  left: 320px;
  width: calc(86% - 120px);
`;

const RoutesComponentLocation = styled.div`
  ${baseStyledRoutes};
  left: 80px;
  width: calc(100% - 120px);
`;

export { RoutesComponent, RoutesComponentLocation }
