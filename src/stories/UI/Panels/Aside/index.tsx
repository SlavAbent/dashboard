import React, { FC } from "react";
import { AsideProps } from "./model/Aside.model";
import ThemeSwitchContainer from "../../../../components/ThemeSwitchContainer/ThemeSwitchContainer";
import { AsideGrowedContainer, AsideWrapper } from "./styles/Aside.styled";

const Aside:FC<AsideProps> = ({
	color = "light",
	className,
	asideLinksContent,
}) => {
	return (
		<AsideWrapper color={color} className={className}>
			<AsideGrowedContainer>{ asideLinksContent }</AsideGrowedContainer>
			<ThemeSwitchContainer />
		</AsideWrapper>
	);
};

export default Aside;
