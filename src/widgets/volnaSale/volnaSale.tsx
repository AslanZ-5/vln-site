import { Button } from '@mantine/core';
import styles from "./volnaSale.module.scss";

export function VolnaSale() {
  return (
    <div className={styles.card}>
      <div className={styles.headerInfo}>
        <span className={styles.header}>Волна Sale</span>
        <span className={styles.info}>Биржа гигабайт, минут и SMS. Есть лишний ресурс? <br />Продайте не нужное, купите нужное</span>
      </div>
      <Button classNames={{root: styles.button__root}} >
        Зарабатывай сейчас
      </Button>
    </div>
  );
}