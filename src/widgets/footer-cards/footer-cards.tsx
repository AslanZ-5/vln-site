import { VkIcon, TelegramIcon, YouTubeIcon, DzenIcon, QRCode, AppStore, GooglePlay, RuStore, RightArrow, AppStore_2, GooglePlay_2 } from "@/shared/assets/svg";
import { Button } from '@mantine/core';
import styles from "./footer-cards.module.scss";

export function FooterCardsBlock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionAnswerCard} >
        <div className={styles.questionAnswerTop}><div className={styles.title}>Вопросы и ответы</div>
          <div className={styles.text}>Найдите здесь ответы на самые частые вопросы абонентов</div>
        </div>
        <Button type='button' className={styles.btn} color="indigo.5">Найти информацию</Button>
      </div>

      <div className={styles.cardKate}>
        <div className={styles.topRowKate}>
          <div className={styles.titleKate}>Катя знает</div>
          <div className={styles.textKate}>Задайте вопрос
            нашему виртуальному помощнику!</div>
        </div>
        <Button type='button' className={styles.btnKate}>
          Виртуальный помощник Катя
        </Button>
      </div>

      <div className={styles.socialBlock}>
        <div className={styles.socialRow}>
          <VkIcon />
          <YouTubeIcon />
        </div>

        <div className={styles.socialRow}>
          <TelegramIcon />
          <DzenIcon />
        </div>
      </div>

      <div className={styles.mobAppCard}>
        <div className={styles.mobAppTop}>
          <div className={styles.mobAppMainText}>
            <div className={styles.label}>Мобильное приложение</div>
            <div className={styles.mobAppTitle}>Волна</div>
            <div className={styles.textWithArrow} >
              <div className={styles.italicsText}>сканируй и загружай!</div>
              <RightArrow className={styles.rightArrow} /></div>
          </div>
          <QRCode />
        </div>
        <div className={styles.mobAppRow}>
          <div className={styles.mobAppIcon}><AppStore /></div>
          <div className={styles.mobAppIcon}><GooglePlay /></div>
          <div className={styles.mobAppIcon2}><AppStore_2 /></div>
          <div className={styles.mobAppIcon2}><GooglePlay_2 /></div>
          <div><RuStore /></div>
        </div>
      </div>
    </div>
  );
}
