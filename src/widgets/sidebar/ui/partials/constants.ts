import {
  Comment,
  Currency,
  Dialpad,
  Pin,
  Sketch,
  New,
  LogoIcon,
  Logo_2,
} from "@/shared/assets/svg/index";

export const categoryBtn = ["Частным лицам", "Бизнесу"];

export const sideBarBtns: SideBarOption[] = [
  {
    Icon: Dialpad,
    Title: "Быстрые команды",
    childrens: null,
  },
  {
    Icon: Currency,
    Title: "Оплата",
    childrens: null,
  },
  {
    Icon: New,
    Title: "Новости и акции",
    childrens: null,
  },
  {
    Icon: Pin,
    Title: "Карта отделений",
    childrens: null,
  },
  {
    Icon: Sketch,
    Title: "Красивые номера",
    childrens: null,
  },
  {
    Icon: Comment,
    Title: "Вопросы и ответы",
    childrens: [
      {
        Icon: null,
        Title: "База знаний",
        childrens: [
          {
            Icon: null,
            Title: "Программирование",
            childrens: null,
          },
        ],
      },
      {
        Icon: null,
        Title: "Оставить заявку",
        childrens: null,
      },
      {
        Icon: null,
        Title: "Написать в чат",
        childrens: null,
      },
    ],
  },
  {
    Icon: Logo_2,
    Title: "О компании",
    childrens: [
      {
        Icon: null,
        Title: "База знаний",
        childrens: [
          {
            Icon: null,
            Title: "Программирование",
            childrens: null,
          },
        ],
      },
      {
        Icon: null,
        Title: "Оставить заявку",
        childrens: null,
      },
      {
        Icon: null,
        Title: "Написать в чат",
        childrens: null,
      },
    ],
  },
];

export interface SideBarOption {
  Icon: any;
  Title: string;
  childrens: null | SideBarOption[];
}
