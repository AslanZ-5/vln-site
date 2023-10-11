import { useState } from 'react';
import { newListData } from './card/news-list.mock';
import { Pagination, MantineProvider, Button } from '@mantine/core';
import { NewsCard } from './card/news-card';
import { chunk } from 'lodash';
import { useMobile } from '@/shared/lib/use-mobile';
import { NewsHeader } from './news-header/news-header';
import styles from './news-list.module.scss';

export function NewsList() {
  const { isMobile } = useMobile();
  const [activePage, setPage] = useState(1);
  const [numberPages, setNumberPages] = useState(8);

  const data = chunk(
    newListData
      .map((item) => ({ id: item.id, title: item.title, image: item.image, date: item.date, category: item.category })),
    isMobile ? numberPages : 8
  );

  const items = data[activePage - 1].map((item) => (
    <div key={item.id}>
      <NewsCard
        image={item.image}
        title={item.title}
        date={item.date}
        id={item.id}
        category={item.category}
      />
    </div>
  ));

  const totalPage = Math.ceil(newListData.length / 8);

  const handleShowMore = () => {
    setNumberPages(numberPages + 8);
  };

  return (
    <>
      <NewsHeader />

      <MantineProvider>
        <div className={styles.cardsBox}>
          {items}
        </div>
        {!isMobile && <Pagination total={totalPage} value={activePage} onChange={setPage} position='center'
          classNames={{ control: styles.pagination__control, dots: styles.pagination__dots }} />}

        {isMobile && <Button classNames={{ root: styles.button__root }} onClick={() => handleShowMore()}>Показать еще</Button>}
      </MantineProvider>
    </>
  );
}
