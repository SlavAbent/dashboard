import { useState } from "react";

export const useToggleBlock = () => {
	const [activeDropDown, setActiveDropDown] = useState(false);

	if (activeDropDown) setActiveDropDown(activeDropDown => !activeDropDown);


	if (!activeDropDown) return;

	return { activeDropDown, setActiveDropDown };
};

