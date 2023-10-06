import { ChangeEvent, FC, HTMLAttributes, useEffect, useState } from 'react';
import styles from './home-internet.module.scss';
import cn from 'classnames';
import { TextInput, useMantineTheme, Button } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { ChevronRight } from '@/shared/assets/icons';
import { RightSection } from './right-section';
import { HOME_INTERNET__CONSTANTS } from './constants';
import { PhoneInput } from '@/shared/ui-kit';
import { onlyMobile } from '@/shared/constants/mediaQueries';

export const HomeInternet: FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
  const theme = useMantineTheme();
  const [possible, setPossible] = useState(false);
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const isMobile = useMediaQuery(onlyMobile);

  useEffect(() => {
    // отправление запроса с проверкой возможности
    if (address === '') {
      setPossible(true);
    } else {
      setPossible(true);
    }
  }, [address]);

  const onPhoneChange = (val?: string) => {
    (val || val === '') && setPhone(val);
  };

  return (
    <div className={cn(styles.container, className && className)} {...props}>
      <div className={styles.wrapper}>
        <Link href={''} className={styles.link}>
          {/* нужно будет добавить ссылку на страницу домашнего интернета*/}
          <span className={styles.link__text}>{HOME_INTERNET__CONSTANTS.TITLE}</span>
          <ChevronRight className={styles.link__chevron} color={theme.other.colors.base[0]} />
        </Link>
        <TextInput
          label={HOME_INTERNET__CONSTANTS.ADDRESS_LABEL}
          placeholder={HOME_INTERNET__CONSTANTS.ADDRESS_PLACEHOLDER}
          classNames={{
            root: styles.input__root,
            input: styles.input__input,
            label: styles.input__label,
            rightSection: styles.input__right_section,
          }}
          onChange={(e) => setAddress(e.target.value)}
          rightSection={address && <RightSection possible={possible} />}
          rightSectionWidth={isMobile ? undefined : address && (possible ? 197 : 235)}
        />
        {address && isMobile && <RightSection possible={possible} />}
        {address && !possible && (
          <>
            <div className={styles.description}>
              {HOME_INTERNET__CONSTANTS.ADDRESS_DESCRIPTION_PART1} <br />
              {HOME_INTERNET__CONSTANTS.ADDRESS_DESCRIPTION_PART2}
            </div>

            <PhoneInput
              darkBackground
              changeHandler={(a, b) => onPhoneChange(b)}
              clearHandler={() => setPhone('')}
            />
          </>
        )}
        {address && possible && (
          <>
            <div className={styles.description}>{HOME_INTERNET__CONSTANTS.POSSIBLE__LABEL}</div>
            <PhoneInput
              darkBackground
              changeHandler={(a, b) => onPhoneChange(b)}
              clearHandler={() => setPhone('')}
            />
          </>
        )}
      </div>
      <div className={styles.footer}>
        <Button
          disabled={address === '' || phone.length !== 10}
          classNames={{
            root: styles.button__root,
          }}>
          {possible
            ? HOME_INTERNET__CONSTANTS.BUTTON_POSSIBLE
            : HOME_INTERNET__CONSTANTS.BUTTON_IMPOSSIBLE}
        </Button>
        {possible && address && (
          <div className={styles.price}>{HOME_INTERNET__CONSTANTS.PRICE}</div>
        )}
      </div>
    </div>
  );
};
