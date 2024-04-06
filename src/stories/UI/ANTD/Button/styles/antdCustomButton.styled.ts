import styled from "styled-components";
import { antdButtonShape } from "../model/Button.model";
import { Button } from "antd";

export const ButtonComponent = styled(Button) `
  cursor: pointer;
  border: none;
  position: relative;
  text-decoration: none;
`;
export const ButtonChildren = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ButtonIcon = styled.i<{
  icon: boolean,
  iconPosition: string,
  shape: antdButtonShape | undefined
}>`
  width: ${(p) => p.icon ? "18px": "0px"};
  height: ${(p) => p.icon ? "18px" : "0px"};
  margin-right: ${(p) => 
		p.iconPosition === "left" ? "8px" :
			p.shape ? "0px" : "0px"
};
  margin-left:  ${(p) => p.iconPosition === "left" ? "0px" :
		p.shape ? "0px" : "8px"
};
  order:${(p) => p.iconPosition === "left" ? "1" : "2"};
`;

export const ButtonText = styled.span<{iconPosition: string, textTransform: string}>`
  order:${(p) => p.iconPosition === "left" ? "2" : "1"};
  text-transform: ${(p) => 
		p.textTransform === "uppercase" ? "uppercase" : 
			p.textTransform === "capitalize" ? "capitalize" :
				p.textTransform === "lowercase" ? "lowercase" : "lowercase"
};
`;
