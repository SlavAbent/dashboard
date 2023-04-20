import styled from 'styled-components/macro';

const baseStyledRoutes = `
  display: flex;
  align-items: flex-start;
`

const RoutesComponent = styled.div`
  ${baseStyledRoutes};
  width: calc(86% - 120px);
`;

const RoutesComponentLocation = styled.div`
  ${baseStyledRoutes};
  width: 100%;
`;

export { RoutesComponent, RoutesComponentLocation }
