export type ActionTypes =
  | { type: 'SET_INITIAL_VALUES'; payload: { title: string; names: string[] } }
  | { type: 'SET_OPTIONS'; payload: void };
