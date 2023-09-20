import { Carousel as MantineCarousel } from "@mantine/carousel";
import Image from "next/image";
import styles from "./carousel.module.css";
import { Slide } from "./constants";
import { memo } from "react";

export const Carousel = memo(({ images }: { images: Slide[] }) => {
  return (
    <div className={styles.wrapper}>
      <MantineCarousel
        withIndicators
        height={"100%"}
        loop
        className={styles.image}
        w={"100%"}
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
        {images.map((slide) => (
          <MantineCarousel.Slide key={slide.path} className={styles.img}>
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
