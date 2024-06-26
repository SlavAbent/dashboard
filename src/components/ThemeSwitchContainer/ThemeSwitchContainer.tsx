import React from "react";
import { ThemeWrapper } from "./styles/ThemeSwitchContainer.styled";
import { BsSun } from "react-icons/bs";
import { MdOutlineNightlight } from "react-icons/md";
import { Theme } from "../../context/themeContext";
import { useTheme } from "../../hooks/useTheme";

const ThemeSwitchContainer = () => {
	const { toggleTheme, toggleThemeFunc } = useTheme();

	return (
		<ThemeWrapper color={toggleTheme} onClick={toggleThemeFunc}>
			{toggleTheme === Theme.DARK ? <MdOutlineNightlight color="#ffffff" /> : <BsSun  color="#000000" />}
		</ThemeWrapper>
	);
};

export default ThemeSwitchContainer;
