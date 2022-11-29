import { ToggleMenuTypes } from '../types/enums/panels'

export const toggleMenu = payload => {
  return {
    type: ToggleMenuTypes.TOGGLE_MENU,
  }
}