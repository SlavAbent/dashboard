import React, { FC } from "react";
import { NotifIcon } from "./Notification.style";
import { IIcon } from "../types";

export const NotificationIcon: FC<Partial<IIcon>> = (props) => {
	const { children, size = 16, color, title, onClick} = props;

	return (
		<NotifIcon
			size={size}
			color={color}
			title={title}
			onClick={onClick}
		>
			{children}
		</NotifIcon>
	);
};
