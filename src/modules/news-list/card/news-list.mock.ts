import { PILLS } from "../constants";

export interface CardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  category: string;
  filter: string[];
}

export const newListData: CardProps[] = [
  {
    id: 1,
    title: 'Выбираем июльского победителя акции «Миллион за домашний интернет»',
    date: '31.07.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Связь',
    filter: [PILLS.CONNECTION],
  },
  {
    id: 2,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '28.07.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 3,
    title: 'Волна работает на территории новых регионов РФ в обычном режиме',
    date: '18.07.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 4,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '17.07.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 5,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '03.07.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Связь',
    filter: [PILLS.CONNECTION],
  },
  {
    id: 6,
    title: 'Апрельский победитель определен',
    date: '27.06.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 7,
    title: 'Домашний кинотеатр VIJU',
    date: '01.07.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 8,
    title: 'Скоро выбор апрельского победителя акции',
    date: '21.06.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 9,
    title: 'Мобильный Интернет - всегда в твоем кармане!',
    date: '11.04.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 10,
    title: 'Представлен обновленный личный кабинет',
    date: '13.05.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 11,
    title: 'Переименование опции “Море волнуется',
    date: '26.09.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 12,
    title: 'Заключены стратегические партнерства с ведущими мировыми компаниями',
    date: '21.10.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 13,
    title: 'Главные «СМИ» предупреждают: зима близко',
    date: '09.04.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 14,
    title: 'Поддержка малого и среднего бизнеса',
    date: '21.06.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 15,
    title: 'Эко-инициативы: Волна снижает воздействие на окружающую среду',
    date: '15.08.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 16,
    title: 'Волна упрощает управление услугами для пользователей',
    date: '17.02.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 17,
    title: 'Новый тарифный план для смартфонов',
    date: '14.06.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 18,
    title: 'Участником акции «Миллион за домашний интернет» стал 19-летний блогер',
    date: '19.09.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 19,
    title: 'Современные операторы связи: в поисках лучшего соединения',
    date: '12.02.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 20,
    title: 'Оператор связи предлагает новые условия доступа к мобильному Интернету',
    date: '01.04.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 21,
    title: 'Оператор связи предлагает быструю и надежную связь',
    date: '06.09.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 22,
    title: 'Новые выгодные условия',
    date: '13.05.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 23,
    title: 'Смешно, но обереги никого не защитили',
    date: '14.07.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 24,
    title: 'Мобильный Интернет от Волны - всегда в твоем кармане!',
    date: '04.04.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 25,
    title: 'Скоро выбор июльского победителя акции',
    date: '09.07.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 26,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '26.04.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 27,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '31.06.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 28,
    title: 'Волна работает в обычном режиме',
    date: '28.08.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 29,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '11.07.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 30,
    title: 'Домашний кинотеатр VIJU',
    date: '13.11.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 31,
    title: 'Главные «СМИ» предупреждают: зима близко',
    date: '10.04.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 32,
    title: 'Высококачественный прототип будущего проекта связывает нас с нашим прошлым',
    date: '21.04.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 33,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '24.07.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 34,
    title: 'Волна представляет супервыгодное предложение!',
    date: '26.04.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 35,
    title: 'Большой объем интернет-трафика, минут разговоров и SMS по привлекательной цене',
    date: '11.09.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 36,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '12.12.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 37,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '16.09.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 38,
    title: 'Расширение сети 5G: Волна увеличивает зону покрытия сверхбыстрого интернета',
    date: '11.04.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 39,
    title: 'Волна объявила о запуске нового тарифного плана',
    date: '17.05.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 40,
    title: 'Скоро выбор предновогоднего победителя акции',
    date: '19.12.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 41,
    title: 'Домашний кинотеатр VIJU',
    date: '01.08.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 42,
    title: 'Главные «СМИ» предупреждают: зима близко',
    date: '12.09.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 43,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '15.07.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 44,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '18.06.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 45,
    title: 'Волна работает на территории новых регионов РФ в обычном режиме',
    date: '01.04.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 46,
    title: 'Высококачественный прототип будущего проекта связывает нас с нашим прошлым',
    date: '14.05.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 47,
    title: 'Компания сообщает о значительном расширении сети 5G на территории страны',
    date: '21.04.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 48,
    title: 'Внедрение технологии VoLTE',
    date: '23.08.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 49,
    title: 'Волна становится лидером в области качества связи',
    date: '12.09.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 50,
    title: 'Улучшение системы безопасности: Волна запускает новую систему идентификации пользователей',
    date: '11.05.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 51,
    title: 'Разработана и внедрена новая система идентификации пользователей',
    date: '25.09.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 52,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '19.05.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 53,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '15.06.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 54,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '21.07.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    
    id: 55,
    title: 'Домашний кинотеатр VIJU',
    date: '13.03.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 56,
    title: 'Высококачественный прототип будущего проекта связывает нас с нашим прошлым',
    date: '31.07.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 57,
    title: 'Волна работает на территории новых регионов РФ в обычном режиме',
    date: '13.08.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 58,
    title: 'Объявлено о внедрении VoLTE',
    date: '10.06.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 59,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '08.03.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 60,
    title: 'Представляем линейку передовых устройств с инновационными функциями',
    date: '18.02.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 61,
    title: 'Бесплатный доступ к образовательным ресурсам: Волна поддерживает образование и развитие молодежи',
    date: '14.07.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 62,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '11.05.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 63,
    title: 'Партнерство с крупнейшими мировыми производителями: Волна укрепляет свои позиции на рынке',
    date: '21.08.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 64,
    title: 'Эко-инициативы: Волна снижает воздействие на окружающую среду',
    date: '14.05.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 65,
    title: 'Домашний кинотеатр VIJU',
    date: '18.08.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 66,
    title: 'Заключены стратегические партнерства с ведущими мировыми компаниями',
    date: '13.02.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 67,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '18.09.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 68,
    title: 'Главные «СМИ» предупреждают: зима близко',
    date: '23.04.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 69,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '12.06.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 70,
    title: 'Заключены стратегические партнерства с ведущими мировыми компаниями',
    date: '15.08.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 71,
    title: 'Эко-инициативы: Волна снижает воздействие на окружающую среду',
    date: '19.05.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 72,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '21.06.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 73,
    title: 'Высококачественный прототип будущего проекта связывает нас с нашим прошлым',
    date: '14.07.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 74,
    title: 'Партнерство с крупнейшими мировыми производителями: Волна укрепляет свои позиции на рынке',
    date: '23.05.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 75,
    title: 'Волна работает на территории новых регионов РФ в обычном режиме',
    date: '27.04.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 76,
    title: 'Домашний кинотеатр VIJU',
    date: '31.07.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 77,
    title: 'Обновленный личный кабинет: Волна упрощает управление услугами для пользователей',
    date: '14.08.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 78,
    title: 'Эко-инициативы: Волна снижает воздействие на окружающую среду',
    date: '11.04.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 79,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '17.08.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 80,
    title: 'Главные «СМИ» предупреждают: зима близко',
    date: '14.04.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 81,
    title: 'Заключены стратегические партнерства с ведущими мировыми компаниями',
    date: '15.08.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 82,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '15.09.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 83,
    title: 'Переименование опции “Ноль внутри сети”',
    date: '17.12.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 84,
    title: 'Высококачественный прототип будущего проекта связывает нас с нашим прошлым',
    date: '22.04.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 85,
    title: 'Пользователи могут управлять своими услугами, контролировать баланс и подключать новые опции в режиме реального времени',
    date: '11.04.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 86,
    title: 'Обновленный личный кабинет',
    date: '16.03.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 87,
    title: 'Домашний кинотеатр VIJU',
    date: '19.02.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 88,
    title: 'Обновленный личный кабинет: Волна упрощает управление услугами для пользователей',
    date: '21.09.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 89,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '15.07.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 90,
    title: 'Участником акции «Миллион за домашний интернет» стал 18-летний блогер',
    date: '18.04.23',
    image: '/assets/img/news-image/News_7.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 91,
    title: 'Бесплатный доступ к образовательным ресурсам',
    date: '19.06.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 92,
    title: 'Ищем тех. специалистов по подключению к интернету',
    date: '11.04.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 93,
    title: 'Обновленный личный кабинет: Волна упрощает управление услугами для пользователей',
    date: '14.06.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 94,
    title: 'Путешествуете по России? Общайтесь выгодно!',
    date: '23.04.23',
    image: '/assets/img/news-image/News_3.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 95,
    title: 'Эко-инициативы: Волна снижает воздействие на окружающую среду',
    date: '25.06.23',
    image: '/assets/img/news-image/News_2.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 96,
    title: 'Обновленный личный кабинет',
    date: '28.03.23',
    image: '/assets/img/news-image/News_1.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 97,
    title: 'Главные «СМИ» предупреждают: зима близко',
    date: '21.09.23',
    image: '/assets/img/news-image/News_8.png',
    category: 'Новости',
    filter: [PILLS.NEWS],
  },
  {
    id: 98,
    title: 'Умный дом с Волной',
    date: '15.08.23',
    image: '/assets/img/news-image/News_6.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
  {
    id: 99,
    title: 'Участником акции «Миллион за домашний интернет» стал 18-летний блогер',
    date: '12.04.23',
    image: '/assets/img/news-image/News_5.png',
    category: 'Интернет',
    filter: [PILLS.INTERNET],
  },
  {
    id: 100,
    title: 'Бесплатный доступ к образовательным ресурсам',
    date: '17.04.23',
    image: '/assets/img/news-image/News_4.png',
    category: 'Акции',
    filter: [PILLS.PROMOTIONS],
  },
];
