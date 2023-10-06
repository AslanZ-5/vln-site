import React from 'react';
import Image from 'next/image';
import styles from './tariff-services.module.scss';

import TariffRules from '@/shared/ui-kit/advertising/tariff-rules/tariff-rules';
import AdditionalInformation from '@/shared/ui-kit/advertising/additional-Information/additional-information';

function TariffServices() {
  return (
    <div>
      <div style={{ width: '100%', height: '360px', position: 'relative' }}>
        <Image
          layout="fill"
          objectFit="contain"
          className={styles.tariffBanner}
          src="/assets/img/tariff-banners/tariff-banner-1.png"
          alt=""
        />
      </div>
      <TariffRules />
      <AdditionalInformation title={'Дополнительная информация'}>
        До момента успешного завершения процедуры идентификации в приложении ID.Abonent на Sim-карте
        установлен тариф <span className={styles.word}>«Воздух»</span>. Срок действия данного
        тарифного плана — 30 дней с момента активации Sim-карты. По окончании срока действия
        тарифного плана оказание услуг связи прекращается.
      </AdditionalInformation>
      <AdditionalInformation>
        Установив SIM-карту с тарифным планом «Воздух» в мобильное устройство Вы сможете скачать и
        установить приложение ID.Abonent, пройти процедуру идентификации без использования сети
        Wi-Fi.
      </AdditionalInformation>
      <div className={styles.footerAdvertising}>
        <div style={{ position: 'relative', width: '100%', height: '350px' }}>
          <Image
            src="/assets/img/tariff-banners/tariff-banner-2.jpg"
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={styles.idAbonent}>
          <h1 className={styles.titleAbonent}>Приложение ID.Abonent</h1>
          <span className={styles.infoAbonent}>
            Сканируйте QR-код и загружайте приложение для регистрации SIM-карты без визита в салон
            связи.
          </span>
          <Image
            className={styles.bannerQrCode}
            src="/assets/img/tariff-banners/qr-code.png"
            width={200}
            height={200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default TariffServices;
