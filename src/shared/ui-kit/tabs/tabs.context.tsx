import { createContext } from 'react';

export const TypeContext = createContext('small');

export interface IActiveTabValueContext {
  value: string | null;
  setValue: (value: string) => void;
}

export const ActiveTabValueContext = createContext<IActiveTabValueContext>({
  value: null,
  setValue: () => {},
});
