export interface CardProps {
  id: number;
  src: string;
  title: string;
  date: string;
}

export const imgCards: CardProps[] = [
  {
    id: 1,
    src: "/assets/img/Rectangle.png",
    title: "Переименование опции “Ноль внутри сети”",
    date: "03.07.23",
  },
  {
    id: 2,
    src: "/assets/img/Rectangle2.png",
    title: "Апрельский победитель определен",
    date: "27.06.23",
  },
  {
    id: 3,
    src: "/assets/img/Rectangle3.png",
    title: "Домашний кинотеатр VIJU",
    date: "01.07.23",
  },
  {
    id: 4,
    src: "/assets/img/Rectangle4.png",
    title: "Скоро выбор апрельского победителя акции",
    date: "21.06.23",
  },
];
