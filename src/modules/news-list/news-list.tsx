import { useState } from 'react';
import { useRouter } from 'next/router';
import { newListData } from './card/news-list.mock';
import { Pagination, MantineProvider, Button } from '@mantine/core';
import { NewsCard } from './card/news-card';
import { chunk } from 'lodash';
import { useMobile } from '@/shared/lib/use-mobile';
import { Pills } from '@/shared/ui-kit';
import { PILLS } from './constants';
import styles from './news-list.module.scss';

export function NewsList() {
  const { isMobile } = useMobile();
  const [activePage, setPage] = useState(1);
  const [numberPages, setNumberPages] = useState(8);
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>(Object.values(PILLS)[0]);

  const data = chunk(
    newListData
      .filter((item) => item.filter.includes(activeFilter))
      .map((item) => ({ id: item.id, title: item.title, image: item.image, date: item.date, category: item.category, filter: item.filter })),
    isMobile ? numberPages : 8
  );

  const items = data[activePage - 1].map((item) => (
    <div key={item.id} >
      <NewsCard
        image={item.image}
        title={item.title}
        date={item.date}
        id={item.id}
        category={item.category}
        filter={item.filter}
      />
    </div>
  ));

  const newsWithFilter = newListData.filter((item) => item.filter.includes(activeFilter));

  const totalPage = Math.ceil(newsWithFilter.length / 8);

  const handleShowMore = () => {
    setNumberPages(numberPages + 8);
  };

  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/news/1');
  };

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Новости и акции
        </h2>
        <div className={styles.pills}>
          <Pills data={Object.values(PILLS)} value={activeFilter} onChange={(v) => setActiveFilter(v)} />
        </div>
      </div>

      <MantineProvider>
        <div className={styles.cardsBox} onClick={handleClick}>
          {items}
        </div>
        {!isMobile && <Pagination total={totalPage} value={activePage} onChange={setPage} position='center'
          classNames={{ control: styles.pagination__control, dots: styles.pagination__dots }} />}

        {isMobile && <Button classNames={{ root: styles.button__root }} onClick={() => handleShowMore()}>Показать еще</Button>}
      </MantineProvider>
    </>
  );
}
