export type HanButtonParams = {
  buttonText: string;
};

export type DebouncedParams = {
  value: string;
  delay: number;
};

export type Person = {
  firstName: string;
  lastName: string;
  nickname?: string;
};

export interface ISearchTermContext {
  searchTerm: string;
  setSearchTerm?: (e: any) => void;
}
