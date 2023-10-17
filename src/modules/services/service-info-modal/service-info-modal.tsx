import { FC } from 'react';
import { Modal } from '@/shared/ui-kit';
import { ServiceInfoModalProps } from './service-info-modal.types';
import { Accordion, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { EllipsisPurple, EllipsisPink } from '@/shared/assets/svg';
import { useMobile } from '@/shared/lib/use-mobile';
import styles from './service-info-modal.module.scss';

export const ServiceInfoModal: FC<ServiceInfoModalProps> = ({ opened, onClose, title, area, connectCode,
  disconnectCode, tariffs, optionInformation }) => {
  const { isMobile } = useMobile();

  const items = (
    <>
      <Accordion.Item value={'info'}>
        <Accordion.Control>Информация об опции</Accordion.Control>
        <Accordion.Panel>
          {optionInformation?.map((item) =>
            <div className={styles.optionInfoRow} key={item.id}>
              <div className={styles.optionInfoCol}>
                <div className={styles.optionInfoTitle}>{item.label}</div>
                <div className={styles.optionInfoDesc}>
                  {item.description?.map((item) =>
                    <div key={item.apps} className={styles.optionDescAppRow}>
                      {item.apps}
                      <div className={styles.optionDescIcons}>
                        {item.icons?.map((item) => <div key={item.id}>{item.icon} </div>)}
                      </div>
                    </div>)}
                </div>
              </div>
              <div className={styles.optionInfoPrice}>{item.prise}</div>
            </div>
          )}
        </Accordion.Panel>
      </Accordion.Item>

      {connectCode && <Accordion.Item value={'code'} >
        <Accordion.Control>Как подключить или отключить</Accordion.Control>
        <Accordion.Panel>
          <div className={styles.connectDisconectRow} >
            <span className={styles.startCodeRow}> Для подключения введите команду на телефоне</span>
            <span className={styles.connectDisconectCode}>{connectCode}</span>
            <span className={styles.endCodeRow}>либо через Мобильное приложение</span>
          </div>
          <div className={styles.connectDisconectRow} >
            <span className={styles.startCodeRow}>Для отключения введите команду на телефоне</span>
            <span className={styles.connectDisconectCode}>{disconnectCode}</span>
            <span className={styles.endCodeRow}>либо через Мобильное приложение</span>
          </div>
        </Accordion.Panel>
      </Accordion.Item>}

      <Accordion.Item value={'tariff'}>
        <Accordion.Control>Доступна на тарифах</Accordion.Control>
        <Accordion.Panel>
          <div className={styles.tariffs}>
            {tariffs?.map((item) =>
              <div className={styles.tariffsRow} key={item.id}>
                <Link href={`/tariff/${item.path}`} className={styles.tariffsLink}>{item.tariff}</Link>
              </div>
            )}</div>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value={'area'}>
        <Accordion.Control>Зона действия опции</Accordion.Control>
        <Accordion.Panel>
          <div className={styles.areaRow} >
            <div >
              {area}</div>
          </div>
        </Accordion.Panel>
      </Accordion.Item>
    </>
  );

  return (
    <Modal size="m" title={title ? title : ''} opened={opened} onClose={onClose} disableBackgoundGradient={isMobile ? true : false}
      classNames={{
        root: styles.modal__root,
        title: styles.modal__title
      }}>
      <ScrollArea h={420} type="auto" mt="md" classNames={{ scrollbar: styles.scroll }}>
        <Accordion transitionDuration={700} multiple variant="contained" radius="lg"
          defaultValue={['info']}
          classNames={{
            item: styles.accordion__item,
            control: styles.accordion__control,
            chevron: styles.accordion__chevron,
            content: styles.accordion__content
          }}
        >
          {items}
        </Accordion>
      </ScrollArea>

      {isMobile &&
        <>
          <EllipsisPink className={styles.ellipsisTop} />
          <EllipsisPurple className={styles.ellipsisBottom} />
        </>}

    </Modal>
  );
}

