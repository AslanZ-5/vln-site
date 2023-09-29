import { Image, Card, CardSection, Text } from "@mantine/core";
import styles from "./style.module.scss";
import { ArrowRight } from "@/shared/assets/svg";
export function NewsCard() {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImgWrapper}>
        <Image
          className={styles.cardImg}
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={356}
          alt="Norway"
        />
      </div>
      <Text className={styles.text}>
        Скоро выбор апрельского победителя акции
      </Text>
      <Text className={styles.date}>03.07.23</Text>
      <button className={styles.moreBtn}>
        Подробнее
        <ArrowRight className={styles.arrowStyles} />
      </button>
    </div>
  );
}
