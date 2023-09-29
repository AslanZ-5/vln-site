import { NewsCard } from "./partials/news-card/news-card";
import styles from "./news.module.scss";
import { NewsHeader } from "./partials/news-header/news-header";
import { Carousel as MantineCarousel } from "@mantine/carousel";

export function News() {
  return (
    <div className={styles.wrapper}>
      <NewsHeader />
      <MantineCarousel
        withIndicators
        slideSize="25%"
        slidesToScroll={4}
        slideGap={"20px"}
        loop
        className={styles.image}
        w={"100%"}
        styles={{
          indicator: {
            width: "12px",
            height: "4px",
            backgroundColor: "#184BFF",
            marginTop: "12px",
            transition: "width 250ms ease",
            "&[data-active]": {
              width: "40px",
              height: "4px",
            },
          },
        }}
      >
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide className={styles.img}>
          <NewsCard />
        </MantineCarousel.Slide>
      </MantineCarousel>
    </div>
  );
}
