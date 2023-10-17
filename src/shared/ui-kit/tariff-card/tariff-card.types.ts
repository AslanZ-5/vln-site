import { TariffCardOptionProps } from './tariff-card-option/tariff-card-option.types';

export type TariffCardProps = {
  id: number;
  backgroundImage: string;
  title: string;
  newPrice: number | string;
  oldPrice?: number;
  additionalInfo?: {
    title: string;
    subtitle: string;
    discount: number;
  };
  options: TariffCardOptionProps[];
};
