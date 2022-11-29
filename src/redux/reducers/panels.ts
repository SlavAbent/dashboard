import { store } from '../state'
import { IInitialState } from '../types/interfaces/interfaces'
import { ToggleMenuTypes } from '../types/enums/panels'

export const panelsReducer = (state = store, action): IInitialState => {
  switch ( action.type ) {
    case ToggleMenuTypes.TOGGLE_MENU:
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu
      }
    default: return state
  }
}