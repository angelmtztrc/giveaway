import { useReducer } from 'react';
import { getRandomWinnersAndSubstitutes } from '../libs';
import AppCtx from './AppCtx';
import AppReducer from './AppReducer';

export interface InitialStateValues {
  title: string;
  names: string[];
  winners: string[];
  substitutes: string[];
  options: {
    winners: number;
    substitutes: number;
    avoidDuplicates: boolean;
  };
}

export type setOptionsProps = {
  winners: number;
  substitutes: number;
  avoidDuplicates: boolean;
};

const initialState: InitialStateValues = {
  title: '',
  names: [],
  winners: [],
  substitutes: [],
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

  const setOptions = ({ winners, substitutes, avoidDuplicates }: setOptionsProps): void => {
    dispatch({
      type: 'SET_OPTIONS',
      payload: {
        winners,
        substitutes,
        avoidDuplicates
      }
    });
  };

  const setWinnersAndSubstitutes = (): void => {
    const { names, options } = state;

    const { winners, substitutes } = getRandomWinnersAndSubstitutes(
      names,
      options.winners,
      options.substitutes
    );

    dispatch({
      type: 'SET_WINNERS_AND_SUBSTITUTES',
      payload: {
        winners,
        substitutes
      }
    });
  };

  return (
    <AppCtx.Provider
      value={{
        state,
        setInitialValues,
        setMessedValues,
        setOptions,
        setWinnersAndSubstitutes
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export default AppProvider;
