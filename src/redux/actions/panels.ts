import { ToggleMenuTypes } from 'types/enums/panels'

export const toggleMenu = () => {
  return {
    type: ToggleMenuTypes.TOGGLE_MENU,
  }
}