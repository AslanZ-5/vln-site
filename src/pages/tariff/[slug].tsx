import { useRouter } from 'next/router';
import { useMobile } from '@/shared/lib/use-mobile';
import { Select } from '@/shared/ui-kit/select/select';
import { useEffect, useState } from 'react';
import { Tabs } from '@mantine/core';
import { Breadcrumbs } from '@/shared/ui-kit';
import { List } from '.';
import { Path, PathLabels } from '@/shared/constants/links';
import { ARCHIVE, TARIFFS_AND_ARCHIVE_CONSTANTS, TARIFFS_CONSTANTS } from '@/modules/tariff/constants';
import { StartTariffBanner } from '@/modules/tariff/banners-tariff-page/banner';
import { MoreInfo } from '@/modules/tariff/more-info/more-info';
import { AddToTariff } from '@/modules/tariff/add-to-tariff/add-to-tariff';
import { Services } from '@/modules/tariff/services/services';
import styles from '@/modules/tariff/styles/slug-page.module.scss';

function Tariff() {
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const { isMobile } = useMobile();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (Array.isArray(slug)) {
      setActiveTab(slug[0]);
    } else {
      setActiveTab(slug);
    }
  }, [slug]);

  const onSelect = (val?: string | null) => {
    val && setActiveTab(val);
    val &&
      router.push({
        pathname: '/tariff/[slug]',
        query: { slug: val },
      });
  };

  let tabs = (
    <Tabs.List>
      {TARIFFS_CONSTANTS.map(({ id, name, label }) => (
        <Tabs.Tab key={id} value={name}>
          {label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  );

  let archive = (
    <Tabs.List>
      {ARCHIVE.map(({ id, name, label }) => (
        <Tabs.Tab key={id} value={name}>
          {label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  )

  let list = [...List];

  if (isMobile) {
    list = [{ title: PathLabels.tariff.all, href: Path.tariff.start }];
    tabs = (
      <Select
        onChange={onSelect}
        data={TARIFFS_AND_ARCHIVE_CONSTANTS.map(({ label, name }) => ({ label, value: name }))}
        value={activeTab}
      />
    );
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.breadcrumbs}>
          <Breadcrumbs list={list} />
        </div>
        <div className={styles.container__tabs}>
          <Tabs
            value={activeTab}
            onTabChange={onSelect}
            classNames={{
              root: styles.tabs__root,
              tabsList: styles.tabs__list,
              tab: styles.tabs__tab,
              tabLabel: styles.tabs__label,
            }}
          >
            {tabs}
          </Tabs>
          {!isMobile && <Tabs
            value={activeTab}
            onTabChange={onSelect}
            classNames={{
              root: styles.tabs__root,
              tabsList: styles.tabs__list,
              tab: styles.tabs__tab,
              tabLabel: styles.tabs__label,
            }}
          >
            {archive}
          </Tabs>}
        </div>
      </div>

      {activeTab === 'start' && <>
        <StartTariffBanner />
        <div className={styles.container}>
          <Services />
          <AddToTariff />
          <MoreInfo />
        </div>
      </>
      }
    </div>
  );
}

export default Tariff;
