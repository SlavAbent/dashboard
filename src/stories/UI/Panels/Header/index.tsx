import React, { FC, useState } from "react";
import {
	CustomAvatarHeader, HeaderAvatar, HeaderComponent, HeaderContent, HeaderDate,
	HeaderSearch, HeaderSearchComponent,
	HeaderTitle, HeaderTogglerMenu
} from "./styles/Header.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderProps } from "./model/Header.model";
import { Avatar } from "../../Components/Avatar";
import defaultAvatar from "../../../../assets/avatar.jpeg";
import { DropDownMenu } from "../../Components/DropDownMenu";
import { Logo } from "../../../../components/Icons/Logo";
import { Time } from "../../Components/Time";

const Header:FC<HeaderProps> = ({
	color,
	title,
	logo,
	date,
	search,
	avatar,
	content,
	personName = "Slava",
	logoContentBody,
	headerContentBody,
	handleToggleMenu,
}) => {
	const [activeDropDown, setActiveDropDown] = useState(false);
	const avatarContent = (
		<Avatar
			size={32}
			image={defaultAvatar}
			onClick={() => setActiveDropDown((activeDropDown) => !activeDropDown )}
		/>
	);

	const headerContent = (
		<DropDownMenu
			color={color}
			width={104}
			activeDropDown={activeDropDown}
			direction={"bottomToRight"}
			header={<></>}
		>
			{ headerContentBody }
		</DropDownMenu>
	);

	const logoContent = (
		<>
			<Logo
				size={24}
				onClick={handleToggleMenu}
			/>
			{ logoContentBody }
		</>
	);

	return (
		<HeaderComponent color={color}>
			<HeaderTogglerMenu>{ logo && logoContent }</HeaderTogglerMenu>
			<HeaderTitle>{ title && `Welcome back, ${personName}` }</HeaderTitle>
			<HeaderDate>{ date && <Time showTime showIcon /> }</HeaderDate>
			<HeaderSearchComponent>
				{ search && (
					<HeaderSearch>
						<AiOutlineSearch />
					</HeaderSearch>
				) }
			</HeaderSearchComponent>
			<CustomAvatarHeader>
				<HeaderAvatar>{ avatar && avatarContent }</HeaderAvatar>
				<HeaderContent>{ content && headerContent }</HeaderContent>
			</CustomAvatarHeader>
		</HeaderComponent>
	);
};

export default Header;
