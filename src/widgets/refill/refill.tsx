import { ChevronRight } from '@/shared/assets/icons';
import Link from 'next/link';
import { Tabs, useMantineTheme } from '@mantine/core';
import { REFILL_CONSTANTS } from './constants';
import styles from './refill.module.scss';
import { RefilContent } from './content';
import { FC } from 'react';
import { RefillProps } from './refill.types';
import cn from 'classnames';

export const Refill: FC<RefillProps> = ({ lightMode, className, ...props }) => {
  const theme = useMantineTheme();

  return (
    <div
      className={cn(styles.container, lightMode && styles.light, className && className)}
      {...props}
    >
      {!lightMode && (
        <Link href={''} className={styles.link}>
          <span className={styles.link__text}>{REFILL_CONSTANTS.TITLE}</span>
          <ChevronRight className={styles.link__chevron} color={theme.other.colors.base[0]} />
        </Link>
      )}
      <Tabs
        classNames={{
          root: styles.tabs__root,
          tabsList: styles.tabs__tabsList,
          tab: styles.tabs__tab,
          panel: styles.tabs__panel,
        }}
        defaultValue={REFILL_CONSTANTS.MOBILE_CONNECTION}
      >
        <Tabs.List>
          <Tabs.Tab value={REFILL_CONSTANTS.MOBILE_CONNECTION}>
            {REFILL_CONSTANTS.MOBILE_CONNECTION}
          </Tabs.Tab>
          <Tabs.Tab value={REFILL_CONSTANTS.HOME_INTERNET}>
            {REFILL_CONSTANTS.HOME_INTERNET}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={REFILL_CONSTANTS.MOBILE_CONNECTION}>
          <RefilContent lightMode={lightMode} />
        </Tabs.Panel>

        <Tabs.Panel value={REFILL_CONSTANTS.HOME_INTERNET}>
          <RefilContent lightMode={lightMode} />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
