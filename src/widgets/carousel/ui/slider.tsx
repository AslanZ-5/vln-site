import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import styles from "./slider.module.css";
export function Slider() {
  return (
    <div className={styles.wrapper}>
      <Carousel
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
        <Carousel.Slide>
          <Image
            width={16}
            height={9}
            layout="responsive"
            src={"/img/image1.png"}
            alt={"image"}
          />
        </Carousel.Slide>
        <Carousel.Slide bg={"yellow"}></Carousel.Slide>
        <Carousel.Slide bg={"green"}></Carousel.Slide>
      </Carousel>
    </div>
  );
}
