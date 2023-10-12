import {
  Comment,
  Currency,
  Dialpad,
  Pin,
  Sketch,
  New,
  Logo_2,
  Box_2,
} from '@/shared/assets/svg';
import { Path } from '@/shared/constants/links';

export const categoryBtn = [
  {
    name: 'Частным лицам',
  },
  {
    name: 'Бизнесу',
    src: 'https://corp.volnamobile.ru/',
  },
];

export const sidebarItems: SideBarOption[] = [
  {
    Icon: Currency,
    Title: 'Пополнение счета',
    children: null,
    id: 1,
  },
  {
    Icon: Box_2,
    Title: 'Услуги',
    children: null,
    id: 2,
    src: Path.services.root,
  },
  {
    Icon: Dialpad,
    Title: 'Быстрые команды',
    children: null,
    id: 3,
  },
  {
    Icon: New,
    Title: 'Новости и акции',
    children: null,
    id: 4,
    src: Path.news,
  },
  {
    Icon: Pin,
    Title: 'Точки продаж',
    children: null,
    id: 5,
    src: 'https://volnamobile.ru/numbers/',
  },
  {
    Icon: Sketch,
    Title: 'Красивые номера',
    children: null,
    id: 6,
  },
  {
    Icon: Comment,
    Title: 'Вопросы и ответы',
    id: 7,
    children: [
      {
        Icon: null,
        Title: 'База знаний',
        id: 8,
        src: Path.faq.root,
        children: null,
      },
      {
        Icon: null,
        Title: 'Оставить заявку',
        children: null,
        id: 10,
      },
      {
        Icon: null,
        Title: 'Написать в чат',
        children: null,
        id: 11,
      },
    ],
  },
  {
    Icon: Logo_2,
    Title: 'О компании',
    id: 13,
    children: [
      {
        Icon: null,
        Title: 'База знаний',
        id: 14,
        children: null,
      },
      {
        Icon: null,
        Title: 'Оставить заявку',
        children: null,
        id: 16,
      },
      {
        Icon: null,
        Title: 'Написать в чат',
        children: null,
        id: 17,
      },
    ],
  },
];

export interface SideBarOption {
  Icon: any;
  Title: string;
  children: null | SideBarOption[];
  id: number;
  src?: string;
}
