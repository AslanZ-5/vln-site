import { Carousel as MantineCarousel } from "@mantine/carousel";
import Card from '@/shared/ui-kit/card/card';
import { Carousel } from '@/widgets/carousel';
import { slidesMock } from '@/widgets/carousel/ui/constants';
// import { BeautifulNumbers } from './beautiful-numbers/beautiful-numbers';
import { Esim } from '@/widgets/eSim/eSim';
import { Replenishment } from '@/widgets/replenishment/replenishment';
import { HomeInternet } from '@/widgets/home-internet';
import { VolnaSale } from '@/widgets/volnaSale/volnaSale';
import { BeautifulNumbers } from '@/widgets/beautiful-numbers/beautiful-numbers';
import { News } from "@/widgets/news/ui/news";
import styles from './main-page.module.scss';

function MainPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselWrapper}>
        <Carousel images={slidesMock} />
      </div>
      <div className={styles.tariffs}>
      <h3>Тарифы</h3>
        <MantineCarousel
          initialSlide={1}
          withIndicators
          height={"100%"}
          loop
          w={"100%"}
          slidesToScroll={1}
          slideGap={10}
          slideSize={'25%'}
          styles={{
            indicator: {
              width: "12px",
              height: "4px",
              transition: "width 250ms ease",
              "&[data-active]": {
                width: "40px",
                height: "4px",
              },
            },
          }}
        >
          <MantineCarousel.Slide>
            <Card withBorder header={'Загорай'} className={styles.tariffCard}>
              Безлимит
            </Card>
          </MantineCarousel.Slide>
          <MantineCarousel.Slide>
            <Card withBorder header={'Отдыхай'} className={styles.tariffCard}>
              Почасовая тарификация
            </Card>
          </MantineCarousel.Slide>
          <MantineCarousel.Slide>
            <Card withBorder header={'Работай'} className={styles.tariffCard}>
              Поминутная тарификация
            </Card>
          </MantineCarousel.Slide>
          <MantineCarousel.Slide>
            <Card withBorder header={'Терпи'} className={styles.tariffCard}>
              Посекундная тарификация
            </Card>
          </MantineCarousel.Slide>
          <MantineCarousel.Slide>
            <Card withBorder header={'Страдай'} className={styles.tariffCard}>
              Помиллисекундная тарификация, и ты всегда должен в итоге
            </Card>
          </MantineCarousel.Slide>
        </MantineCarousel>
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
    </div>
  );
}

export default MainPage;
