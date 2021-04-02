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

  return (
    <AppCtx.Provider
      value={{
        state
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export default AppProvider;
