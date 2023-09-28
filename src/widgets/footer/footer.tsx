import styles from "./footer.module.scss";
import { Logo_3 } from "@/shared/assets/svg";

export function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.logo}>
          <Logo_3 />
        </div>
        <div className={styles.tagline}>
          <div className={styles.yourConnection} >Твоя связь.</div>
          <div className={styles.yourCrimea} >Твой Крым</div>
        </div>
      </div>

      <div className={styles.rightSide}>
        <p className={styles.notice}>
          Посещая сайт, вы предоставляете 
          <span className={styles.agreement}> согласие на обработку данных </span>
          в соответствии с политикой конфиденциальности.
        </p>
        <div className={styles.telecom2023}>© 2023 ООО «КТК Телеком»</div>
      </div>
    </div>
  );
}