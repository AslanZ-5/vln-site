import React, { FC } from 'react';

import styles from './news.module.scss';
import { NewsDetails } from '@/widgets/news-details/news-details';

const htmlText = `
  <p>Дорогие друзья! </p>
  <p>
    Спешим сообщить вам, что <b>1 августа 2023 г. в 12:00</b> мы определим победителя акции
    «Миллион за домашний интернет от Волны» за подключения друзей в июле!
  </p>
  <p>
    Победитель получит <b>50 000 рублей.</b>
  </p>
  <p>
    Напоминаем, что участниками акции являются все абоненты Волны, по рекомендации которых
    был подключен домашний интернет. Подключайте соседей и друзей и участвуйте в акции!
  </p>
  <p>
    Прямую трансляцию денежного розыгрыша смотрите в официальном сообществе Волны во
    <a href="https://vk.com/volnamobile"> ВКонтакте</a> , а также на канале
    <a href="https://www.youtube.com/channel/UCBE0ytesPsF1BAbiRqMYTJw"> YouTube</a>.
  </p>
  <p>Следите за новостями!</p>
`;

const NewsPage: FC = () => {
  return (
    <div className={styles.root}>
      <NewsDetails
        title='Выбираем июльского победителя акции «Миллион за Домашний интернет»'
        date='31.07.2023'
        tag='Связь'
        imageUrl='/assets/img/news-image/News_9.png'
        text={htmlText}
      />
    </div>
  );
};

export default NewsPage;
