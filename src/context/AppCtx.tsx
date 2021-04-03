import { createContext } from 'react';
import { InitialStateValues, setOptionsProps } from './AppProvider';

interface AppCtxInterface {
  state: InitialStateValues;
  setInitialValues: (title: string, names: string[]) => void;
  setMessedValues: () => void;
  setOptions: ({ winners, substitutes, avoidDuplicates }: setOptionsProps) => void;
}
const AppCtx = createContext({} as AppCtxInterface);

export default AppCtx;
