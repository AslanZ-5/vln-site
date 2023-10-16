export interface infoType {
  id: number;
  letter: string;
  tariffs: tariffsTypes[];
}

export interface tariffsTypes {
  id: number,
  label: string,
}
