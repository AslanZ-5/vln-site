import { NewsCard } from './news-card/news-card';
import styles from './news.module.scss';
import { NewsHeader } from './news-header/news-header';
import { Carousel as MantineCarousel } from '@mantine/carousel';
import { useMobile } from '@/shared/lib/use-mobile';
import { imgCards } from './news-card/img-cards';
import { ChevronRight } from '@/shared/assets/svg';
import { useRouter } from 'next/router';

export function News() {
  const { isMobile, isTablet } = useMobile();
  const router = useRouter();

  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/news');
  };

  const deviceType = isMobile ? 0 : isTablet ? 1 : 2;

  const prop = [
    {
      size: '75%',
      scroll: 1,
    },
    {
      size: '35%',
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
        align='start'
        slideSize={prop[deviceType].size}
        slidesToScroll={prop[deviceType].scroll}
        slideGap={'20px'}
        classNames={{ control: styles.carouselControl }}
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
        }}
      >
        {imgCards.map((item) => {
          return (
            <MantineCarousel.Slide className={styles.img} key={item.id}>
              <NewsCard src={item.src} title={item.title} date={item.date} id={0} category={item.category} />
            </MantineCarousel.Slide>
          );
        })}

        <MantineCarousel.Slide className={styles.img} onClick={handleClick}>
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
