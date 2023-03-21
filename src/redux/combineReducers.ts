import { combineReducers } from 'redux'
import store from './store'


export const rootReducer = combineReducers({
  // panelsReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
