import { createContext } from 'react';
import { InitialStateValues } from './AppProvider';

interface AppCtxInterface {
  state: InitialStateValues;
}
const AppCtx = createContext<AppCtxInterface | null>(null);

export default AppCtx;
