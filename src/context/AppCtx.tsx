import { createContext } from 'react';
import { InitialStateValues } from './AppProvider';

interface AppCtxInterface {
  state: InitialStateValues;
  setInitialValues: (title: string, names: string[]) => void;
  setMessedValues: () => void;
}
const AppCtx = createContext({} as AppCtxInterface);

export default AppCtx;
