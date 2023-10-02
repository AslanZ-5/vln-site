import { Button } from '@mantine/core';
import styles from "./eSim.module.scss";

export function Esim() {
  return (
    <div className={styles.card}>
        <div className={styles.headerInfo}>
          <span className={styles.header}>Подключи<br />eSIM</span>
          <span className={styles.info}>Цифровое решение<br />классических задач</span>
        </div>
      <Button classNames={{ root: styles.button__root }}>
        Оформить eSIM
      </Button>
    </div>
  );
}
