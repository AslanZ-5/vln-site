import { useMobile } from '@/shared/lib/use-mobile';
import { Carousel } from '@/widgets/carousel/carousel';
import { slidesMock, slidesMockMobile } from '@/widgets/carousel/constants';
import { Esim } from '@/widgets/eSim/eSim';
import { Replenishment } from '@/widgets/replenishment/replenishment';
import { HomeInternet } from '@/widgets/home-internet';
import { VolnaSale } from '@/widgets/volna-sale/volna-sale';
import { BeautifulNumbers } from '@/widgets/beautiful-numbers/beautiful-numbers';
import { News } from '@/widgets/news/news';
import { Tariffs } from '@/widgets/tariffs/tariffs';
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
        <BeautifulNumbers className={styles.banners__beautiful_numbers} />
        <VolnaSale className={styles.banners__volna_sale} />
        <Esim className={styles.banners__esim} />
        <Replenishment className={styles.banners__replenishment} />
        <HomeInternet className={styles.banners__home_internet} />
      </div>
      <div className={styles.news}>
        <News />
      </div>
    </div>
  );
}

export default MainPage;
