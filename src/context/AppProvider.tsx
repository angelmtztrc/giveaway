import { useReducer } from 'react';
import AppCtx from './AppCtx';
import AppReducer from './AppReducer';

export interface InitialStateValues {
  title: string;
  names: string[];
  options: {
    winners: number;
    substitutes: number;
    avoidDuplicates: boolean;
  };
}

const initialState: InitialStateValues = {
  title: '',
  names: [],
  options: {
    winners: 1,
    substitutes: 1,
    avoidDuplicates: true
  }
};

export type AppProviderProps = {
  children: React.ReactNode;
};
const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setInitialValues = (title: string, names: string[]): void => {
    dispatch({
      type: 'SET_INITIAL_VALUES',
      payload: { title, names }
    });
  };

  const setMessedValues = (): void => {
    dispatch({
      type: 'MESS_VALUES'
    });
  };

  return (
    <AppCtx.Provider
      value={{
        state,
        setInitialValues,
        setMessedValues
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export default AppProvider;
