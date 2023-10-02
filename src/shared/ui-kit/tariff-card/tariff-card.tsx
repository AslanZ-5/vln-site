import React, { FC } from 'react';
import styles from './tariff-card.module.scss';
import { Button } from '@mantine/core';
import cn from 'classnames';
import { TariffCardProps } from './tariff-card.types';
import TariffCardOption from './tariff-card-option/tariff-card-option';
import TariffCardAdditionalOption from './tariff-card-additional-option/tariff-card-additional-option';

const TariffCard: FC<React.PropsWithChildren<TariffCardProps>> = ({
  id,
  backgroundImage,
  title,
  newPrice,
  oldPrice,
  options,
  additionalInfo,
}) => {
  const [discountEnabled, setDiscountEnabled] = React.useState(false);

  const onEnableAdditionalOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountEnabled(e.target.checked);
  };

  const priceWithDiscount = !additionalInfo
    ? newPrice
    : newPrice - (newPrice / 100) * additionalInfo?.discount;

  return (
    <div className={styles.root}>
      <div className={styles.topInfo}>
        <div className={cn(styles.circle, styles.circleTop)} />
        <div className={cn(styles.circle, styles.circleBottom)} />
        <img className={styles.bgImage} src={backgroundImage} />
        <div className={styles.details}>
          <h2 className={styles.title}>{title}</h2>
          {options?.map((option, index) => (
            <TariffCardOption
              key={index}
              icon={option.icon}
              value={option.value}
              text={option.text}
            />
          ))}
          {additionalInfo && (
            <TariffCardAdditionalOption
              title={additionalInfo?.title}
              subtitle={additionalInfo?.subtitle}
              discount={additionalInfo?.discount}
              onChangeSwith={onEnableAdditionalOption}
            />
          )}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.tariffPrice}>
          {Number(oldPrice) > 0 && <h6 className={styles.oldPrice}>{oldPrice}₽</h6>}
          <h3 className={styles.newPrice}>
            {discountEnabled ? priceWithDiscount : newPrice} ₽ <span>/мес.</span>
          </h3>
        </div>
        <div className={styles.tariffButtons}>
          <Button className={styles.buttonConnectService}>Подключить</Button>
          <Button className={styles.buttonTariffMore}>Подробнее</Button>
        </div>
      </div>
    </div>
  );
};
export default TariffCard;
