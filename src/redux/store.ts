import { configureStore } from '@reduxjs/toolkit'
import isOpenPanels from './reducers/panels.slice';
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
export default configureStore({
  reducer: {
    togglePanels: isOpenPanels,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunk),
});
