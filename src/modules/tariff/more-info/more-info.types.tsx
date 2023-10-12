export interface infoType {
  id: number;
  title: string;
  desc: string;
  info: optionInformationTypes[];
}

export interface optionInformationTypes {
  id: number,
  label: string,
  description:  optionDescTypes[],
  prise: any,
}

export interface optionDescTypes {
  apps: string,
  icons: optionIconTypes[]
}

export interface optionIconTypes {
  id: number,
  icon: any
}
