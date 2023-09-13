import { Carousel as MantineCarousel } from "@mantine/carousel";
import Image from "next/image";
import styles from "./carousel.module.css";

export function Carousel() {
  return (
    <div className={styles.wrapper}>
      <MantineCarousel
        withIndicators
        className={styles.image}
        w={"100%"}
        styles={{
          container: {
            borderRadius: "44px",
          },
          slide: {
            borderRadius: "44px",
            overflow: "hidden",
          },
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
          <Image
            width={16}
            height={9}
            layout="responsive"
            src={"/img/image1.jpg"}
            alt={"image"}
          />
        </MantineCarousel.Slide>
        <MantineCarousel.Slide bg={"yellow"}></MantineCarousel.Slide>
        <MantineCarousel.Slide bg={"green"}></MantineCarousel.Slide>
      </MantineCarousel>
    </div>
  );
}
