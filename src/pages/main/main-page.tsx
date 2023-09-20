import { 
  Wrapper,
  CarouselWrapper,
  Tariffs,
  Banners,
  News
} from "./mainPage.styles";

function MainPage() {
  return (
    <Wrapper>
      <CarouselWrapper />
      <Tariffs />
      <Banners />
      <News />
    </Wrapper>
  );
}

export default MainPage;
