import Card from '@/shared/ui-kit/card/card';
import { Carousel } from '@/widgets/carousel';
import { Slide } from '@/widgets/carousel/ui/constants';
// import { Button } from 'ui-kit-volna';
import {
  Wrapper,
  CarouselWrapper,
  Tariffs,
  Banners,
  News
} from "./main-page.styles";

// TODO убрать это туда, где ему место
const images: Slide[] = [
  {
    path: '/img/image1.jpg',
    alt: 'picture1',
  },
  {
    path: '/img/image1.jpg',
    alt: 'picture2',
  }
];

function MainPage() {
  return (
    <Wrapper>
      <CarouselWrapper>
        <Carousel images={images} />
      </CarouselWrapper>
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
