import React, { useContext, useMemo } from "react";

import { LinksContainer, LinkAnchor, LinkAnchorTitle } from "./styles/Links.styled";
import { ThemeContext } from "../context/themeContext";
import { uniqueId } from "lodash";
import { useAppSelector } from "../redux/hooks";
import { asideLinks } from "./data/asideLinks";

export const Links = () => {
	const isOpenMenu = useAppSelector((state) => state.panelsSlice.togglePanels);
	const { toggleTheme } = useContext(ThemeContext);
	const className = `${isOpenMenu ? " show__text-link" : " hide__text-link"}`;

	const memoRoutes = useMemo(() => {
		return (
			<>
				{asideLinks && asideLinks.map((link) => {
					const { to, icon, name } = link;
					return (
						<LinkAnchor
							key={uniqueId("link_")}
							to={`${to}`}
							color={toggleTheme}
						>
							<span color={toggleTheme}>{icon}</span>
							<LinkAnchorTitle className={className}>{name}</LinkAnchorTitle>
						</LinkAnchor>
					);
				})}
			</>
		);
	}, [isOpenMenu, toggleTheme]);

	return <LinksContainer isOpenMenu={isOpenMenu}>{memoRoutes}</LinksContainer>;
};
