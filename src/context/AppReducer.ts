import { InitialStateValues } from './AppProvider';
import { ActionTypes } from '../types/ActionTypes';

const AppReducer = (state: InitialStateValues, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_INITIAL_VALUES':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default AppReducer;
