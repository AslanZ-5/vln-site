import { FC } from 'react';
import { Modal } from '@/shared/ui-kit';
import { ServiceInfoModalProps } from './service-info-modal.types';
import { Accordion, ScrollArea } from '@mantine/core';
import { serviceParamsMock } from './service-info-modal.mock';
import Link from 'next/link';
import { ElipsisPurple, ElipsisPink } from '@/shared/assets/svg';
import { useMobile } from '@/shared/lib/use-mobile';
import styles from './service-info-modal.module.scss';

export const ServiceInfoModal: FC<ServiceInfoModalProps> = ({ opened, onClose }) => {
  const { isMobile, isDesktop } = useMobile();

  const items = serviceParamsMock.map((item) => (
    <Accordion.Item key={item.title} value={item.title}>
      <Accordion.Control>{item.title}</Accordion.Control>
      <Accordion.Panel key={item.title}>
        <>
          {item.optionInformation?.map((item) =>
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
          {item.connectDisconnect?.map((item) =>
            <div className={styles.connectDisconectRow} key={item.id}>
              {item.startInfo}
              <span className={styles.connectDisconectCode}>{item.code}</span>
              {item.endInfo}
            </div>
          )}
          <div className={styles.tariffs}>
            {item.tariffs?.map((item) =>
              <div className={styles.tariffsRow} key={item.id}>
                <Link href={''} className={styles.tariffsLink}>{item.tariff}</Link>
              </div>
            )}</div>
          {item.area?.map((item) =>
            <div className={styles.areaRow} >
              <div key={item.id}>
                {item.area}</div>
            </div>
          )}
        </>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Modal size="m" title="3-в-1" opened={opened} onClose={onClose} disableBackgoundGradient={isMobile ? true : false}
      classNames={{ root: styles.modal__root, content: styles.modal__content, title: styles.modal__title }}>
      <ScrollArea h={420} type="auto" mt="md" classNames={{ scrollbar: styles.scroll }}>
        <Accordion transitionDuration={700} multiple variant="contained" radius="lg"
          classNames={{
            item: styles.accordion__item,
            control: styles.accordion__control,
            chevron: styles.accordion__chevron,
            content: styles.accordion__content
          }}>
          {items}
        </Accordion>
      </ScrollArea>

      {isMobile && 
      <>
        <ElipsisPink className={styles.elipsisTop} />
        <ElipsisPurple className={styles.elipsisBottom} />
      </>}

    </Modal>
  );
}

