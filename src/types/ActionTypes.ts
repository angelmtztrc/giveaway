export type ActionTypes =
  | { type: 'SET_INITIAL_VALUES'; payload: { title: string; names: string[] } }
  | { type: 'MESS_VALUES'; payload?: void }
  | {
      type: 'SET_OPTIONS';
      payload: { winners: number; substitutes: number; avoidDuplicates: boolean };
    };
