import Card from '@/shared/ui-kit/card/card';
import { Carousel } from '@/widgets/carousel';
import { Slide } from '@/widgets/carousel/ui/constants';
// import { Button } from 'ui-kit-volna';
// import { BeautifulNumbers } from './beautiful-numbers/beautiful-numbers';
import { Esim } from '@/widgets/eSim/eSim';
import styles from './main-page.module.scss';

// TODO убрать это туда, где ему место
const images: Slide[] = [
  {
    path: '/img/image1.jpg',
    alt: 'picture1',
  },
  {
    path: '/img/image1.jpg',
    alt: 'picture2',
  }
];

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselWrapper}>
        <Carousel images={images} />
      </div>
      <div className={styles.tariffs}>
        Тарифы
      </div>
      <div className={styles.banners}>
        {/*<BeautifulNumbers />*/}
        <Card withBorder>
          Волна Sale
        </Card>
        <Esim />
      </div>
      <div className={styles.news}>
        Новости
      </div>
    </div>
  );
}

export default MainPage;
