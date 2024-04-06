import React, { FC } from "react";
import { DotsIcon } from "./Dots.styled";
import { IIcon } from "../types";

export const Dots: FC<Partial<IIcon>> = (props) => {
	const { children, size = 16, color, title, onClick} = props;

	return (
		<DotsIcon
			size={size}
			color={color}
			title={title}
			onClick={onClick}
		>
			{children}
		</DotsIcon>
	);
};
