import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themeMain";

export const Theme = ({ children }: any) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);
