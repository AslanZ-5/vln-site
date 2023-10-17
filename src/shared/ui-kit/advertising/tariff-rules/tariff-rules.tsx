import React from 'react';
import styles from './tariff-rules.module.scss';
import Image from 'next/image';
import { CommentQuestion, ListRules, SimCard, UserRules } from '@/shared/assets/svg';

import TariffAdvertisingRules from '../tariff-advertisin-rules/tariff-advertising-rules';

function TariffRules() {
  return (
    <div className={styles.root}>
      <p className={styles.advertisingOffer}>
        Мы предлагаем воспользоваться ещё одним способом стать абонентом «Волна мобайл». И сделать Вы это сможете где и
        когда Вам удобно. Необходимо лишь приобрести SIM-карту для онлайн активации.
      </p>
      <div className={styles.rules}>
        <div className={styles.adverstingMobile}>
          <img
            width='100%'
            src='/assets/img/tariff-banners/sim-activation-info-1-725.png'
            className={styles.iconRules}
          />
          <img
            width='100%'
            src='/assets/img/tariff-banners/sim-activation-info-2-725.png'
            className={styles.iconRules}
          />
        </div>
        <div className={styles.adversting}>
          <Image
            width={606}
            height={604}
            src='/assets/img/tariff-banners/sim-activation-info.png'
            className={styles.iconRules}
            alt='sim-activation'
          />
        </div>

        <div className={styles.listRules}>
          <TariffAdvertisingRules
            title={'Что делать далее'}
            name={'Скачать приложение'}
            rules={
              'Скачать приложение ID.Abonent в Google Play или App Store (с помощью своего смартфона считайте QR-код на упаковке или найти через поиск в магазинах приложений).'
            }
            icon={<UserRules />}
          />
          <TariffAdvertisingRules
            name={'Идентифицировать абонента'}
            rules={
              'Запустить приложение ID.Abonent и следуя инструкциям на экране (для идентификации Вам понадобится паспорт) пройти процедуру идентификации нового абонента.'
            }
            icon={<UserRules />}
          />
          <TariffAdvertisingRules name={'Выбрать тариф '} icon={<SimCard />}>
            После успешного завершения процедуры идентификации Вам будет доступен тарифный план, указанный на упаковке.
            В случае необходимости вы можете самостоятельно сменить тарифный план, выбрав из{' '}
            <span className={styles.text}>доступных</span>
          </TariffAdvertisingRules>
          <TariffAdvertisingRules
            name='Получить договор'
            rules='Договор на услуги связи вы получите в формате PDF по ссылке в sms и в приложении ID.Abonent'
            icon={<ListRules />}
          />
          <TariffAdvertisingRules
            name='Получить ответы'
            rules='Если возникают вопросы — задавайте их в чате приложения ID.Abonent'
            icon={<CommentQuestion />}
          />
        </div>
      </div>
      <p className={styles.textRules}>
        ID Abonent — это сертифицированный программный комплекс, включающий специальное приложение, с помощью которого
        осуществляется процесс идентификации и регистрации абонента в сети «Волна мобайл» с полным соблюдением
        стандартов законодательства в части передачи и хранения персональных данных.
      </p>
    </div>
  );
}
export default TariffRules;
