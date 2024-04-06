import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 1001;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 400px;
  transform: translate(-50%, -50%);
  padding: ${(p) => p.theme.padding.default};
  box-shadow: ${(p) => p.theme.decoration.boxShadow.panel};
  border-radius: ${(p) => p.theme.decoration.borderRadius.large};

  background-color: ${p => p.color === "light"
		? p.theme.colors?.lightTheme.mainColored
		: p.theme.colors?.darkTheme.mainColored
};
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ModalTitle = styled.div`
  
`;
export const ModalIconClose = styled.div`
  position: fixed;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
export const ModalBody = styled.div`
  margin-bottom: ${(p) => p.theme.margin.default};
  padding: ${(p) => p.theme.padding.default};
`;
export const ModalBodyContent = styled.div`
`;
export const ModalFooter = styled.div`

`;
export const ModalFooterClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
