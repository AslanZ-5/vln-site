import React from 'react';
import Image from 'next/image';
import { useMobile } from '@/shared/lib/use-mobile';
import { InfoCard } from './info-card';
import { VectorBanner, VectorBanner2 } from '@/shared/assets/svg';
import styles from './banner.module.scss';

export const StartTariffBanner = () => {
  const { isDesktop, isMobile } = useMobile();

  return (
    <div className={styles.container}>
      {isDesktop && <>
        <Image src='/assets/img/mobile-page/start.png' alt='Not found' width={1300} height={356} className={styles.banner} />
        {/* <VectorBanner2 className={styles.banner__vector1} /> */}
        <VectorBanner className={styles.banner__vector2} />
      </>
      }
      {!isDesktop && !isMobile && <>
        <Image src='/assets/img/mobile-page/start2.png' alt='Not found' width={728} height={354} className={styles.banner} />
      </>}
      {isMobile && <>
        <Image src='/assets/img/mobile-page/start3.png' alt='Not found' width={335} height={156} className={styles.banner} />
      </>}
      <InfoCard />
    </div>
  );
}