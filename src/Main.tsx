import React, { useContext } from "react";
import { HashRouter, Link } from "react-router-dom";
import { AppMainFields, AppWrapper, AsideWrap } from "./styles/App.styled";
import Header from "./stories/UI/Panels/Header";
import Aside from "./stories/UI/Panels/Aside";
import { RoutesWrapper } from "./routes";
import { togglePanels } from "./redux/reducers/panels/panels.slice";
import { Home } from "./components/Icons/Home";
import { Links } from "./links/Links";
import { ThemeContext } from "./context/themeContext";
import { useAppDispatch, useAppSelector } from "./redux/hooks";


export const Main = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const dispatch = useAppDispatch();
	const isOpenMenu = useAppSelector((state) => state.panelsSlice.togglePanels);

	const className = `${isOpenMenu ? " full__menu" : " min__menu"}`;
	const handleToggleMenu = () => dispatch(togglePanels());

	const person = "Slava";

	const logoContentBody = (
		<>
			<Link to="List">
				<Home size={24} />
			</Link>
		</>
	);

	const headerContentBody = (
		<>
			<Link to="Profile">Profile</Link>
			<Link to="Logout">Logout</Link>
			<Link to="Register">Register</Link>
		</>
	);


	return (
		<AppWrapper color={toggleTheme}>
			<HashRouter>
				<AppMainFields>
					<Header
						logo
						date
						search
						avatar
						content
						color={toggleTheme}
						personName={person}
						logoContentBody={logoContentBody}
						headerContentBody={headerContentBody}
						handleToggleMenu={handleToggleMenu}
					/>
					<AsideWrap>
						<Aside
							className={className}
							color={toggleTheme}
							asideLinksContent={<Links />}
						/>
						<RoutesWrapper />
					</AsideWrap>
				</AppMainFields>
			</HashRouter>
		</AppWrapper>
	);
};

