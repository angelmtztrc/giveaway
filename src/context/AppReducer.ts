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
    case 'SET_OPTIONS':
      return {
        ...state,
        options: {
          ...state.options,
          ...action.payload
        }
      };
    case 'SET_WINNERS_AND_SUBSTITUTES':
      return {
        ...state,
        winners: action.payload.winners,
        substitutes: action.payload.substitutes
      };
    default:
      return state;
  }
};

export default AppReducer;
