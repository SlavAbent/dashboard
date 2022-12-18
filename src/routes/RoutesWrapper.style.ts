import styled from 'styled-components/macro';

const baseStyledRoutes = `
  display: flex;
  align-items: flex-start;
  height: calc(100% - 58px);
`

const RoutesComponent = styled.div`
  ${baseStyledRoutes};
  width: calc(86% - 120px);
`;

const RoutesComponentLocation = styled.div`
  ${baseStyledRoutes};
  width: 100%;
  margin-left: 20px
`;

export { RoutesComponent, RoutesComponentLocation }
