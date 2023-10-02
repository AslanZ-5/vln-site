import { memo } from "react";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import Image from "next/image";
import { Slide } from "./constants";
import styles from "./carousel.module.scss";
import { useMobile } from '@/shared/lib/useMobile';

export const Carousel = memo(({ images }: { images: Slide[] }) => {
  const { isMobile } = useMobile();

  return (
    <div className={styles.wrapper}>
      <MantineCarousel
        withIndicators
        height={"100%"}
        loop
        className={styles.image}
        w={"100%"}
        slideGap={15}
        withControls={!isMobile}
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
        {images.map((slide, index) => (
          <MantineCarousel.Slide key={index} className={styles.img}>
            <Image
              width={16}
              height={9}
              layout="responsive"
              src={slide.path}
              alt={slide.alt}
            />
          </MantineCarousel.Slide>
        ))}
      </MantineCarousel>
    </div>
  );
});

Carousel.displayName = "Carousel";
