import React, { FC } from "react";
import { IIcon } from "../types";
import { CheckIcon } from "./Check.styled";

export const Check: FC<Partial<IIcon>> = (props) => {
	const { children, size = 16, color, title, } = props;

	return (
		<CheckIcon
			size={size}
			color={color}
			title={title}
		>
			{children}
		</CheckIcon>
	);
};
