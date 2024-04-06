import React, { useContext } from "react";
import { AsideHeaderWrapper, AsideHeaderText } from "./AsideHeader.styled";
import { ThemeContext } from "../../../../../../context/themeContext";

export const AsideHeader = (response) => {
	const { toggleTheme } = useContext(ThemeContext);
	return (
		<AsideHeaderWrapper>
			<AsideHeaderText color={toggleTheme}>Всего списков: {response.length}</AsideHeaderText>
		</AsideHeaderWrapper>
	);
};
