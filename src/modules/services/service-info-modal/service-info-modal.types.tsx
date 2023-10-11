export type ServiceInfoModalProps = {
  opened: boolean,
  onClose: () => void
}

export interface serviceParamsType {
  title: string;
  optionInformation: optionInformationTypes[];
  connectDisconnect: connectDisconnectTypes[];
  tariffs: tariffsTypes[];
  area: areaTypes[]
}

export interface optionInformationTypes {
  id: number,
  label: string,
  description:  optionDescTypes[],
  prise: any,
}

export interface optionDescTypes {
  apps: string,
  icons: otionIconTypes[]
}

export interface otionIconTypes {
  id: number,
  icon: any
}

export interface connectDisconnectTypes {
  id: number,
  startInfo: string,
  endInfo: string,
  code: string,
}

export interface tariffsTypes {
  id: number,
  tariff: string,
}

export interface areaTypes {
  id: number,
  area: string
}
