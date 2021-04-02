import { InitialStateValues } from './AppProvider';
import { ActionTypes } from '../types/ActionTypes';

const AppReducer = (state: InitialStateValues, action: ActionTypes) => {
  switch (action.type) {
    case 'SET_INITIAL_VALUES':
      return {
        ...state,
        title: action.payload.title,
        // Remove emptys strings
        names: [...action.payload.names.filter((el: string) => el !== '')]
      };
    default:
      return state;
  }
};

export default AppReducer;
