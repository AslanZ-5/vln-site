import { Carousel } from '@/widgets/carousel';
import { slidesMock } from '@/widgets/carousel/ui/constants';
import { Esim } from '@/widgets/eSim/eSim';
import { Replenishment } from '@/widgets/replenishment/replenishment';
import { HomeInternet } from '@/widgets/home-internet';
import { VolnaSale } from '@/widgets/volnaSale/volnaSale';
import { BeautifulNumbers } from '@/widgets/beautiful-numbers/beautiful-numbers';
import { News } from '@/widgets/news/ui/news';
import { Tariffs } from '@/widgets/tariffs';

import styles from './main-page.module.scss';

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
        <BeautifulNumbers />
        <VolnaSale />
        <Esim />
      </div>
      <div className={styles.replenishmentAndInternet}>
        <Replenishment />
        <HomeInternet />
      </div>
      <div className={styles.news}>
        <News />
      </div>
      <div className={styles.news}>Новости</div>
    </div>
  );
}

export default MainPage;
