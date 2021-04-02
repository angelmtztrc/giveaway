import { InitialStateValues } from './AppProvider';
import { ActionTypes } from '../types/ActionTypes';
import { disorderAnArray } from '../libs';

const AppReducer = (state: InitialStateValues, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_INITIAL_VALUES':
      return {
        ...state,
        title: action.payload.title,
        // Remove emptys strings
        names: [...action.payload.names.filter((el: string) => el !== '')]
      };
    case 'MESS_VALUES':
      return {
        ...state,
        names: [...disorderAnArray(state.names)]
      };
    default:
      return state;
  }
};

export default AppReducer;
