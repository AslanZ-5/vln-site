import { Card } from '@mantine/core';
import styles from './faq-page.module.scss';
import { volnaTheme as theme } from '@/shared/constants/theme';
import { ChevronRight } from '@/shared/assets/svg';
import { CARD_CONTENTS } from './constants';
import Link from 'next/link';

function Cards() {
  return (
    <>
      {CARD_CONTENTS.map((content, i) => {
        return (
          <Link key={i} href={content.href}>
            <Card className={styles.card} radius={16} padding={'0 0 32px 0'} withBorder>
              <Card.Section className={styles.cardHeader} style={{ backgroundColor: theme.colors.primary[100] }}>
                <div>
                  <div className={styles.headerTitle}>
                    {content.header.icon}
                    <span>{content.header.title}</span>
                  </div>
                  <div className={styles.headerArrowIcon}>
                    <ChevronRight />
                  </div>
                </div>
              </Card.Section>
              <Card.Section className={styles.cardContent}>{content.text}</Card.Section>
            </Card>
          </Link>
        );
      })}
    </>
  );
}

export default Cards;
