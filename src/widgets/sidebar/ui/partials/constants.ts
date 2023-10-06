import {
  Comment,
  Currency,
  Dialpad,
  Pin,
  Sketch,
  New,
  Logo_2,
  Box_2,
} from '@/shared/assets/svg/index';

export const categoryBtn = [
  {
    name: 'Частным лицам',
  },
  {
    name: 'Бизнесу',
    src: 'https://corp.volnamobile.ru/',
  },
];

export const sideBarBtns: SideBarOption[] = [
  {
    Icon: Currency,
    Title: 'Пополнение счета',
    childrens: null,
    id: 1,
  },
  {
    Icon: Box_2,
    Title: 'Услуги',
    childrens: null,
    id: 2,
  },
  {
    Icon: Dialpad,
    Title: 'Быстрые команды',
    childrens: null,
    id: 3,
  },
  {
    Icon: New,
    Title: 'Новости и акции',
    childrens: null,
    id: 4,
    src: 'https://volnamobile.ru/numbers/',
  },
  {
    Icon: Pin,
    Title: 'Точки продаж',
    childrens: null,
    id: 5,
    src: 'https://volnamobile.ru/numbers/',
  },
  {
    Icon: Sketch,
    Title: 'Красивые номера',
    childrens: null,
    id: 6,
  },
  {
    Icon: Comment,
    Title: 'Вопросы и ответы',
    id: 7,
    childrens: [
      {
        Icon: null,
        Title: 'База знаний',
        id: 8,
        childrens: [
          {
            Icon: null,
            Title: 'Программирование',
            childrens: null,
            id: 9,
          },
        ],
      },
      {
        Icon: null,
        Title: 'Оставить заявку',
        childrens: null,
        id: 10,
      },
      {
        Icon: null,
        Title: 'Написать в чат',
        childrens: null,
        id: 11,
      },
    ],
  },
  {
    Icon: Logo_2,
    Title: 'О компании',
    id: 13,
    childrens: [
      {
        Icon: null,
        Title: 'База знаний',
        id: 14,
        childrens: [
          {
            Icon: null,
            Title: 'Программирование',
            childrens: null,
            id: 15,
          },
        ],
      },
      {
        Icon: null,
        Title: 'Оставить заявку',
        childrens: null,
        id: 16,
      },
      {
        Icon: null,
        Title: 'Написать в чат',
        childrens: null,
        id: 17,
      },
    ],
  },
];

export interface SideBarOption {
  Icon: any;
  Title: string;
  childrens: null | SideBarOption[];
  id: number;
  src?: string;
}
