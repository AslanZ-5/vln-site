import { createContext } from 'react';

export interface IActiveSegmentValueContext {
  value: string | null;
  setValue: (value: string) => void;
}

export const ActiveSegmentValueContext = createContext<IActiveSegmentValueContext>({
  value: null,
  setValue: () => {},
});
