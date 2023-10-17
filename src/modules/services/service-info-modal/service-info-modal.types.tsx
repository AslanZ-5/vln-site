export type ServiceInfoModalProps = {
  opened: boolean,
  onClose: () => void,
  title?: string,
  area?: string,
  connectCode?: string;
  disconnectCode?: string;
  tariffs?: TariffsTypes[];
  optionInformation?: OptionInformationTypes[];
}

export interface TariffsTypes {
  id: number,
  tariff: string,
  path: string
}

export interface OptionInformationTypes {
  id: number,
  label: string,
  description:  OptionDescTypes[],
  prise: any,
}

export interface OptionDescTypes {
  apps: string,
  icons: OpionIconTypes[]
}

export interface OpionIconTypes {
  id: number,
  icon: any
}
