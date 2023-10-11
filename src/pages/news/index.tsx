import { NewsList } from '@/modules/news-list/news-list';
import { Breadcrumbs } from '@/shared/ui-kit';
import styles from './news-page.module.scss';

const list = [
  { title: 'Главная', href: '/' },
  { title: 'Новости и акции', href: '/news' },
];

function NewsPage() {

  return (
    <div className={styles.wrapper}>
      <div>
        <Breadcrumbs list={list} />
      </div>
      <div className={styles.news}>
        <NewsList />
      </div>
    </div>
  );
}

export default NewsPage;
