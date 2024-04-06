import { TogglePanelTypes } from "types/enums/panels";

export const toggleMenu = () => {
	return {
		type: TogglePanelTypes.TOGGLE_PANEL
	};
};
