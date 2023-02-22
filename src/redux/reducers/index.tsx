import { combineReducers } from 'redux'
import { panelsReducer } from './panels'
import { store } from '../../AppMainWrapper'

export const rootReducer = combineReducers({
  panelsReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
