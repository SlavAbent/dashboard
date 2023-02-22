import {
  useDispatch,
} from 'react-redux'
import { AppDispatch } from 'redux/reducers'

export const useAppDispatch = () => useDispatch<AppDispatch>();
