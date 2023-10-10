import { ReactNode } from 'react';
import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { FooterCardsBlock } from '@/widgets/footer-cards/footer-cards';
import styles from './layout.module.scss';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.centralColumn}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footerWrapper}>
          <div className={styles.footerCards}>
            <FooterCardsBlock />
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
