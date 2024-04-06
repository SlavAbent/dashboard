import React, { FC } from "react";
import { MainPaneColumn, MainPanelWrapper, MainPanelWrap, MainPanelText } from "./styles/MainPanel.styled";
import { MainPanelProps } from "./model/MainPanel.model";

export const MainPanel: FC<Readonly<MainPanelProps>> = ({
	header,
	content,
	footer,
	className,
	children,
	title,
	color
}) => {
	return (
		<MainPanelWrapper className={className} color={color}>
			<MainPaneColumn>
				<MainPanelWrap>{header}</MainPanelWrap>
				<MainPanelWrap>{content}</MainPanelWrap>
				<MainPanelWrap>{footer}</MainPanelWrap>
				<MainPanelText>{title}</MainPanelText>
				{children}
			</MainPaneColumn>
		</MainPanelWrapper>
	);
};
