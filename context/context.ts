import { defaultState } from '@/helpers/const';
import { ISearchTermContext } from '@/type';
import { createContext } from 'react';

export const AppContext = createContext<ISearchTermContext>(defaultState);
