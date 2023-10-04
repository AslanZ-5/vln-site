import { ChevronRight } from '@/shared/assets/icons';
import Link from 'next/link';
import { Tabs, useMantineTheme } from '@mantine/core';
import { REPLENISHMENT_CONSTANTS } from './constants';
import styles from './replenishment.module.scss';
import { ReplenishmentContent } from './content';
import { FC } from 'react';
import { ReplenishmentProps } from './replenishment.types';
import cn from 'classnames';

export const Replenishment: FC<ReplenishmentProps> = ({ lightMode, className, ...props }) => {
  const theme = useMantineTheme();

  return (
    <div
      className={cn(styles.container, lightMode && styles.light, className && className)}
      {...props}
    >
      {!lightMode && (
        <Link href={''} className={styles.link}>
          {/* надо будет вставить ссылку на страницу пополнения счета */}
          <span className={styles.link__text}>{REPLENISHMENT_CONSTANTS.TITLE}</span>
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
        defaultValue={REPLENISHMENT_CONSTANTS.MOBILE_CONNECTION}
      >
        <Tabs.List>
          <Tabs.Tab value={REPLENISHMENT_CONSTANTS.MOBILE_CONNECTION}>
            {REPLENISHMENT_CONSTANTS.MOBILE_CONNECTION}
          </Tabs.Tab>
          <Tabs.Tab value={REPLENISHMENT_CONSTANTS.HOME_INTERNET}>
            {REPLENISHMENT_CONSTANTS.HOME_INTERNET}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value={REPLENISHMENT_CONSTANTS.MOBILE_CONNECTION}>
          <ReplenishmentContent lightMode={lightMode} />
        </Tabs.Panel>

        <Tabs.Panel value={REPLENISHMENT_CONSTANTS.HOME_INTERNET}>
          <ReplenishmentContent
            lightMode={lightMode}
            mask={REPLENISHMENT_CONSTANTS.MASK}
            placeholder={REPLENISHMENT_CONSTANTS.PLACEHOLDER}
          />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};
