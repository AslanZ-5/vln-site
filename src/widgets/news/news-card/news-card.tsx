import { Image, Card, CardSection, Text } from "@mantine/core";
import styles from "./style.module.scss";
import { ArrowRight } from "@/shared/assets/svg";
import { CardProps } from "./img-cards";

export function NewsCard({ src, title, date, category }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImgWrapper}>
        <Image className={styles.cardImg} src={src} alt="Norway" />
      </div>
      <Text className={styles.text}>{title}</Text>
      <Text className={styles.date}>{date}</Text>
      <button className={styles.moreBtn}>
        Подробнее
        <ArrowRight className={styles.arrowStyles} />
      </button>
      <div className={styles.category}>{category}</div>
    </div>
  );
}
