import { InitialStateValues } from './AppProvider';

type ActionProps = {
  type: string;
  payload: void;
};

const AppReducer = (state: InitialStateValues, action: ActionProps) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default AppReducer;
