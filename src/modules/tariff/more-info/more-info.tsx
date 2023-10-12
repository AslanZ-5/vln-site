import React from 'react';
import { moreInfoMock } from './more-info.mock';
import { Accordion } from '@mantine/core';
import styles from './more-info.module.scss'

export const MoreInfo = () => {

  const items = moreInfoMock.map((item) => (
    <Accordion.Item key={item.id} value={item.title}>
      <Accordion.Control>{item.title}</Accordion.Control>
      <Accordion.Panel key={item.id}>
        <>
          {item.info?.map((item) =>
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
        </>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.header__title}>Подробнее о тарифе</div>
      
        <Accordion transitionDuration={700} multiple variant="contained" radius="lg"
          classNames={{
            item: styles.accordion__item,
            control: styles.accordion__control,
            chevron: styles.accordion__chevron,
            content: styles.accordion__content
          }}>
          {items}
        </Accordion>
    </div>
  );
}