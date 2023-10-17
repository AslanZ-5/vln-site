import React from 'react';
import { TariffAdvertisingRulesProps } from './tariff-advertising-rules.types';
import styles from './tariff-advertising-rules.module.scss';

function TariffAdvertisingRules({ title, name, rules, icon, children }: TariffAdvertisingRulesProps) {
  return (
    <div className={styles.root}>
      <ul className={styles.rules}>
        <h2 className={styles.rulesTitle}>{title}</h2>
        <li className={styles.listRules}>
          <div className={styles.rulesNamesIcon}>
            <span className={styles.rulesIcon}>{icon}</span>
            <h3 className={styles.rulesName}>{name}</h3>
          </div>
          <p className={styles.rulesText}>{rules || children}</p>
        </li>
      </ul>
    </div>
  );
}

export default TariffAdvertisingRules;
