import { Image, Text } from "@mantine/core";
import { ArrowRight } from "@/shared/assets/svg";
import { CardProps } from "./news-list.mock";
import styles from "./style.module.scss";

export function NewsCard({ image, title, date, category }: CardProps) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImgWrapper}>
        <Image className={styles.cardImg} src={image} alt="news" />
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
