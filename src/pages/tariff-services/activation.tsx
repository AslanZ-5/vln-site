import React from 'react';
import Image from 'next/image';
import styles from './tariff-services.module.scss';

import TariffRules from '@/shared/ui-kit/advertising/tariff-rules/tariff-rules';
import AdditionalInformation from '@/shared/ui-kit/advertising/additional-Information/additional-information';
import { ArrowLeft } from '@/shared/assets/svg/index';
import { Breadcrumbs } from '@/shared/ui-kit/index';
import { Path, PathLabels } from '@/shared/constants/links';

const breadcrumbsList = [
  { title: PathLabels.main, href: Path.main },
  { title: PathLabels.services.root, href: Path.services.root },
  { title: PathLabels.services.mobile, href: Path.services.mobile },
  { title: 'Пакеты интернета', href: '' },
];

function TariffServices() {
  return (
    <div className={styles.root}>
      <span className={styles.back}>
        <ArrowLeft /> Все услуги
      </span>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs list={breadcrumbsList} />
      </div>
      <div className={styles.header}>
        <img className={styles.bannerTariffs} src='/assets/img/tariff-banners/tariff-banner-1.png' alt='' />
        <div className={styles.phoneAdversting}>
          <p className={styles.phoneText}>Активация SIM-карты в любом месте в любое время онлайн.</p>
          <h1 className={styles.phoneFree}>Бесплатно</h1>
        </div>
      </div>
      <TariffRules />
      <div>
        <AdditionalInformation title={'Дополнительная информация'}>
          До момента успешного завершения процедуры идентификации в приложении ID.Abonent на Sim-карте установлен тариф
          <span className={styles.word}> «Воздух»</span>. Срок действия данного тарифного плана — 30 дней с момента
          активации Sim-карты. По окончании срока действия тарифного плана оказание услуг связи прекращается.
        </AdditionalInformation>
        <AdditionalInformation>
          Установив SIM-карту с тарифным планом «Воздух» в мобильное устройство Вы сможете скачать и установить
          приложение ID.Abonent, пройти процедуру идентификации без использования сети Wi-Fi.
        </AdditionalInformation>
      </div>
      <div className={styles.footerAdvertising}>
        <div className={styles.idAbonent}>
          <h1 className={styles.titleAbonent}>Приложение ID.Abonent</h1>
          <span className={styles.infoAbonent}>
            Сканируйте QR-код и загружайте приложение для регистрации SIM-карты без визита в салон связи.
          </span>
          <Image
            className={styles.bannerQrCode}
            src='/assets/img/tariff-banners/qr-code.png'
            width={200}
            height={200}
            alt='Qr Code'
          />
        </div>
      </div>
    </div>
  );
}

export default TariffServices;
