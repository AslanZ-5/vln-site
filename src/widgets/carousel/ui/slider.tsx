import { Carousel } from "@mantine/carousel";

export function Slider() {
  return (
    <Carousel
      mx="auto"
      withIndicators
      height={356}
      w={"100%"}
      styles={{
        container: {
          borderRadius: "4px",
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
      <Carousel.Slide bg={"red"}>1</Carousel.Slide>
      <Carousel.Slide bg={"yellow"}>2</Carousel.Slide>
      <Carousel.Slide bg={"green"}>3</Carousel.Slide>
    </Carousel>
  );
}
