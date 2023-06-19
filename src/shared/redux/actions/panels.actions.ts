import { TogglePanelTypes } from 'shared/types/enums/panels'

export const toggleMenu = () => {
  return {
    type: TogglePanelTypes.TOGGLE_PANEL,
  }
}
