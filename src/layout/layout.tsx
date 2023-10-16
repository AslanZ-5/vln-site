import { ReactNode, useState } from 'react';
import { Header } from '@/widgets/header/header';
import { Footer } from '@/widgets/footer/footer';
import { FooterCardsBlock } from '@/widgets/footer-cards/footer-cards';
import styles from './layout.module.scss';
import { Sidebar } from '@/widgets/sidebar/sidebar';
import cn from "classnames";

export function Layout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
            <div className={styles.centralColumn}>
          <div className={cn(styles.header, sidebarOpen && styles.headerSidebarOpened)}>
            <Header>
              <Sidebar isOpen={sidebarOpen} onOpen={() => setSidebarOpen(true)} onClose={() => setSidebarOpen(false)} />
            </Header>
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
