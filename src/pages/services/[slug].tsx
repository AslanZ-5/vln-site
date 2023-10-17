import { useRouter } from 'next/router';
import { useMobile } from '@/shared/lib/use-mobile';
import { Select } from '@/shared/ui-kit/select/select';
import { useEffect, useState } from 'react';
import { PILLS, SERVICES_CONSTANTS, SERVICES_NAME } from '@/modules/services/constants';
import { Tabs, Input } from '@mantine/core';
import { Breadcrumbs, Pills } from '@/shared/ui-kit';
import { List } from '.';
import { Path, PathLabels } from '@/shared/constants/links';
import styles from '@/modules/services/styles/slug-page.module.scss';
import { mockData, servicesCardsMock } from '@/shared/constants/mock';
import { Card } from '@/modules/services/second-view/card';
import { FilterIcon, SearchIcon } from '@/shared/assets/svg';
import { BottomSheet } from 'react-spring-bottom-sheet';
import { BottomSheetList } from '@/modules/services/second-view/bottomsheet-list';

function Services() {
  const [activeTariff, setActiveTariff] = useState<string>(mockData.tariffs[0]);
  const [activeTab, setActiveTab] = useState<string>(SERVICES_NAME[0]);
  const [activeFilter, setActiveFilter] = useState<string>(Object.values(PILLS)[0]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [bottomSheetOpen, setBottomSheetOpen] = useState(false);
  const { isMobile } = useMobile();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (Array.isArray(slug)) {
      setActiveTab(slug[0]);
    } else {
      slug && setActiveTab(slug);
    }
  }, [slug]);

  const onSelect = (val: string) => {
    setActiveTab(val);
    router.push({
      pathname: '/services/[slug]',
      query: { slug: val },
    });
  };

  let tabs = (
    <Tabs.List>
      {SERVICES_CONSTANTS.map(({ id, name, label }) => (
        <Tabs.Tab key={id} value={name}>
          {label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  );

  let list = [...List];

  if (isMobile) {
    list = [{ title: PathLabels.services.all, href: Path.services.root }];
    tabs = (
      <Select
        onChange={onSelect}
        data={SERVICES_CONSTANTS.map(({ label, name }) => ({ label, value: name }))}
        value={activeTab}
      />
    );
  }

  const searchSection = (
    <div className={styles.search}>
      <Input
        classNames={{ input: styles.search__input }}
        placeholder='Поиск услуги'
        icon={<SearchIcon />}
        iconWidth={60}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {isMobile && (
        <button type='button' className={styles.button} onClick={() => setBottomSheetOpen(true)}>
          <FilterIcon />
        </button>
      )}
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {isMobile && (
        <BottomSheet open={bottomSheetOpen} blocking={false} onDismiss={() => setBottomSheetOpen(false)}>
          <BottomSheetList list={mockData.tariffs} handler={setActiveTariff} active={activeTariff} />
        </BottomSheet>
      )}
      <div className={styles.breadcrumbs}>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        {!isMobile && (
          <div className={styles.header}>
            <div className={styles.header__title}>{PathLabels.services.root}</div>
            <div className={styles.header__search}>
              {!isMobile && (
                <Select data={mockData.tariffs} value={activeTariff} onChange={(s) => s && setActiveTariff(s)} />
              )}
              {searchSection}
            </div>
          </div>
        )}
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
        <div className={styles.pills}>
          <Pills data={Object.values(PILLS)} value={activeFilter} onChange={(v) => setActiveFilter(v)} />
        </div>
        {isMobile && searchSection}
        <div className={styles.cards}>
          {servicesCardsMock
            .filter((item) => (activeTariff === mockData.tariffs[0] ? true : item.tariff.includes(activeTariff)))
            .filter((item) => item.tab.includes(activeTab))
            .filter((item) => item.filter.includes(activeFilter))
            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map(({ price, title, period, priceTitle, area, connectCode, disconnectCode, tariffs, optionInformation }, index) => (
              <Card price={price} title={title} id={index} key={index} period={period} priceTitle={priceTitle} 
                area={area} connectCode={connectCode} disconnectCode={disconnectCode} tariffs={tariffs} optionInformation={optionInformation}/>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
