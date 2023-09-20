import { 
  Wrapper,
  CarouselWrapper,
  Tariffs,
  Banners,
  News
} from "./mainPage.styles";
import Card from '@/shared/ui-kit/card/card';

function MainPage() {
  return (
    <Wrapper>
      <CarouselWrapper />
      <Tariffs />
      <Banners>
        <Card>
          Красивые номера
        </Card>
        <Card>
          Волна Sale
        </Card>
        <Card>
          Подключи eSIM
        </Card>
      </Banners>
      <News />
    </Wrapper>
  );
}

export default MainPage;
