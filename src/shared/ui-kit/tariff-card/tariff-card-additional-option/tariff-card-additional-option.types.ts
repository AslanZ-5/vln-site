import { ChangeEventHandler } from 'react';

export type TariffCardAdditionalProps = {
  title: string;
  subtitle: string;
  discount: number;
  onChangeSwith?: ChangeEventHandler<HTMLInputElement>;
};
