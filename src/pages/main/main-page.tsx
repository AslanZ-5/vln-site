import { useMobile } from '@/shared/lib/useMobile';
import { Carousel } from '@/widgets/carousel';
import { slidesMock, slidesMockMobile } from '@/widgets/carousel/ui/constants';
import { Esim } from '@/widgets/eSim/eSim';
import { Replenishment } from '@/widgets/replenishment/replenishment';
import { HomeInternet } from '@/widgets/home-internet';
import { VolnaSale } from '@/widgets/volnaSale/volnaSale';
import { BeautifulNumbers } from '@/widgets/beautiful-numbers/beautiful-numbers';
import { News } from '@/widgets/news/ui/news';
import { Tariffs } from '@/widgets/tariffs';
import styles from './main-page.module.scss';
import { Modal } from '@/shared/ui-kit';
import { Search } from '@/shared/ui-kit/search/search';

function MainPage() {
  const { isMobile } = useMobile();
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselWrapper}>
        <Carousel images={isMobile ? slidesMockMobile : slidesMock} />
      </div>
      <div className={styles.tariffs}>
        <Tariffs />
      </div>
      <div className={styles.banners}>
        <BeautifulNumbers className={styles.banners__beautiful_numbers} />
        <VolnaSale className={styles.banners__volna_sale} />
        <Esim className={styles.banners__esim} />
        <Replenishment className={styles.banners__replenishment} />
        <HomeInternet className={styles.banners__home_internet} />
      </div>
      <div className={styles.news}>
        <News />
      </div>
      <Modal size="md" title="Выбор города" opened={true} onClose={() => {}}>
        <Search placeholder="Ваш город" label={'Search'} options={[]} />
      </Modal>
    </div>
  );
}

export default MainPage;
