import { Breadcrumbs } from '@/shared/ui-kit';
import styles from './replenishment.module.scss';
import { Replenishment } from '@/widgets/replenishment/replenishment';
import { SearchInput } from '@/shared/ui-kit/search-input/search-input';
import { Path } from '@/shared/constants/links';

const breadCrumbsItems = [
  { title: 'Главная', href: '/' },
  { title: 'Пополнение счета', href: Path.replenishment.root },
];

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs list={breadCrumbsItems} />
      <div className={styles.title}>Пополнение счета</div>
      <div className={styles.subTitle}>
        Оплачивайте мобильную связь и домашний интернет, указав ваш телефон
        Волны. Без комиссии!
      </div>
      <Replenishment lightMode />
      <div className={styles.secTitle}>Точки пополнения</div>
      <div className={styles.subTitle}>
        Пополняйте счет Волны в точках пополнения и терминалах по всему Крыму
      </div>
      <SearchInput
        placeholder="Поиск точки пополнения или терминала"
        data={['Точка 1', 'Точка 2', 'Точка 3', 'Точка 4']}
      />
    </div>
  );
}
