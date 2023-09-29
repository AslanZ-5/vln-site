import { Button } from '@mantine/core';
import styles from "./eSim.module.scss";

export function Esim() {
  return (
    
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.headerInfo}>
          <div className={styles.header}>Подключи<br />eSIM</div>
          <div className={styles.info}>Цифровое решение<br />классических задач</div>
        </div>
        <img src={'/assets/img/eSim.png'} className={styles.img} />
      </div>
      <Button className={styles.btn} color="indigo.5">
        Оформить eSIM
      </Button>
    </div>
  );
}
