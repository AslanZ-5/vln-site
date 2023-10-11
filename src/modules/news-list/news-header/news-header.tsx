import { Tabs } from '@mantine/core';
import styles from './styles.module.scss';

export function NewsHeader() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Новости и акции
      </h2>

      <Tabs radius="md" variant="pills" defaultValue={'1'} classNames={{ tab: styles.tab }}>
        <Tabs.List>
          <Tabs.Tab value="1">Новости</Tabs.Tab>
          <Tabs.Tab value="2">Акции</Tabs.Tab>
          <Tabs.Tab value="3">Связь</Tabs.Tab>
          <Tabs.Tab value="4">Интернет</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
