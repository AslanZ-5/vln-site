import { NewsCard } from './partials/news-card/news-card';
import styles from './news.module.scss';
import { NewsHeader } from './partials/news-header/news-header';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import { useMobile } from '@/shared/lib/useMobile';
import { imgCards } from './partials/news-card/imgCards';
import { ChevronRight } from '@/shared/assets/svg';
export function News() {
  const { isMobile, isTablet } = useMobile();

  const deviceType = isMobile ? 0 : isTablet ? 1 : 2;

  const prop = [
    {
      size: '100%',
      scroll: 1,
    },
    {
      size: '50%',
      scroll: 2,
    },
    {
      size: '25%',
      scroll: 4,
    },
  ];

  return (
    <div className={styles.wrapper}>
      {!isMobile && <NewsHeader />}
      <MantineCarousel
        withIndicators
        slideSize={prop[deviceType].size}
        slidesToScroll={prop[deviceType].scroll}
        slideGap={'20px'}
        loop
        className={styles.image}
        withControls={!isMobile}
        w={'100%'}
        styles={{
          indicator: {
            width: '12px',
            height: '4px',
            backgroundColor: '#184BFF',
            marginTop: '12px',
            transition: 'width 250ms ease',
            '&[data-active]': {
              width: '40px',
              height: '4px',
            },
          },
        }}>
        {imgCards.map((item) => {
          return (
            <MantineCarousel.Slide className={styles.img} key={item.id}>
              <NewsCard src={item.src} title={item.title} date={item.date} />
            </MantineCarousel.Slide>
          );
        })}

        <MantineCarousel.Slide className={styles.img}>
          <div className={styles.cardMoreNews}>
            <div className={styles.chevronRight}>
              <ChevronRight />
            </div>
            <div className={styles.cardText}>Больше новостей и акций</div>
          </div>
        </MantineCarousel.Slide>
      </MantineCarousel>
    </div>
  );
}
