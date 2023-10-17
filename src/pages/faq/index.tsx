import React from 'react';
import styles from '@/modules/faq/faq-page.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import Cards from '@/modules/faq/cards';
import { Path } from '@/shared/constants/links';
import { SearchInput } from '@/shared/ui-kit/search-input/search-input';
import { mockData } from '@/shared/constants/mock';
import { useRouter } from 'next/router'

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Вопросы и ответы', href: Path.faq.root },
];

function FaqPage() {
  const router = useRouter();

  const handleEnterPress = () => {
    router.push(Path.search);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>Вопросы и ответы</span>
      </div>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.container}>
        <SearchInput
          data={mockData.globalSearchData}
          placeholder='Ваш запрос' 
          onEnterPress={handleEnterPress} 
        />
        <div className={styles.grid}>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
