import {
  VkIcon,
  TelegramIcon,
  YouTubeIcon,
  DzenIcon,
  QRCode,
  AppStore,
  GooglePlay,
  RuStore,
  RightArrow,
  AppStore_2,
  GooglePlay_2,
} from '@/shared/assets/svg';
import { Button } from '@mantine/core';
import Link from 'next/link';
import { LINKS } from '@/shared/constants/links';
import styles from './footer-cards.module.scss';

export function FooterCardsBlock() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.questionAnswerCard}>
        <div className={styles.questionAnswerTop}>
          <div className={styles.title}>Вопросы и ответы</div>
          <div className={styles.text}>Найдите здесь ответы на самые частые вопросы абонентов</div>
        </div>
        <Button type='button' classNames={{ root: styles.btn__root }} color='indigo.5'>
          Найти информацию
        </Button>
      </div>

      <div className={styles.cardKate}>
        <div className={styles.topRowKate}>
          <div className={styles.titleKate}>Катя знает</div>
          <div className={styles.textKate}>Задайте вопрос нашему виртуальному помощнику!</div>
        </div>
        <Button type='button' classNames={{ root: styles.btnKate__root }}>
          Виртуальный помощник Катя
        </Button>
      </div>

      <div className={styles.socialBlock}>
        <div className={styles.socialRow}>
          <Link href={LINKS.VK}>
            <VkIcon />
          </Link>
          <Link href={LINKS.YOUTUBE}>
            <YouTubeIcon />
          </Link>
        </div>

        <div className={styles.socialRow}>
          <Link href={LINKS.TELEGRAM}>
            <TelegramIcon />
          </Link>
          <Link href={LINKS.DZEN}>
            <DzenIcon />
          </Link>
        </div>
      </div>

      <div className={styles.mobAppCard}>
        <div className={styles.mobAppTop}>
          <div className={styles.mobAppMainText}>
            <div className={styles.label}>Мобильное приложение</div>
            <div className={styles.mobAppTitle}>Волна</div>
            <div className={styles.textWithArrow}>
              <div className={styles.italicsText}>сканируй и загружай!</div>
              <RightArrow className={styles.rightArrow} />
            </div>
          </div>
          <QRCode />
        </div>
        <div className={styles.mobAppRow}>
          <Link className={styles.mobAppIcon} href={LINKS.APP_STORE}>
            <AppStore />
          </Link>
          <Link className={styles.mobAppIcon} href={LINKS.GOOGLE_PLAY}>
            <GooglePlay />
          </Link>
          <Link className={styles.mobAppIcon2} href={LINKS.APP_STORE}>
            <AppStore_2 />
          </Link>
          <Link className={styles.mobAppIcon2} href={LINKS.GOOGLE_PLAY}>
            <GooglePlay_2 />
          </Link>
          <Link href={LINKS.RU_STORE}>
            <RuStore />
          </Link>
        </div>
      </div>
    </div>
  );
}
