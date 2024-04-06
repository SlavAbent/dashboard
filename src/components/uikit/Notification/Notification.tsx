import React, { FC } from "react";
import { INotification } from "./model/Notification.model";
import { toast } from "react-toastify";

export const Notification: FC<INotification> = (props) => {
	const {
		position,
		autoClose,
		hideProgressBar,
		// newestOnTop,
		closeOnClick,
		rtl,
		pauseOnFocusLoss,
		draggable,
		pauseOnHover,
		progress,
		theme,
	} = props;

	return (
		<>
			{toast("🦄 Wow so easy!", {
				position: position,
				autoClose: autoClose,
				hideProgressBar: hideProgressBar,
				// newestOnTop: newestOnTop,
				rtl: rtl,
				pauseOnFocusLoss: pauseOnFocusLoss,
				closeOnClick: closeOnClick,
				pauseOnHover: pauseOnHover,
				draggable: draggable,
				progress: progress,
				theme: theme,
			})}
		</>
	);
};
