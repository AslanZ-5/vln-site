import React from 'react';
import styles from './additional-information.module.scss';
import { AdditionalInformationProps } from './additional.information.types';

const AdditionalInformation = ({ children, title }: AdditionalInformationProps) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.titleInfo}>{title}</h2>
      <ul className={styles.infoText}>
        <li className={styles.info}>{children}</li>
      </ul>
    </div>
  );
};
export default AdditionalInformation;
