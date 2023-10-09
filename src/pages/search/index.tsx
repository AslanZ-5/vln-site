import React from 'react';
import styles from './search-results.module.scss';
import { Breadcrumbs } from '@/shared/ui-kit';
import { breadCrumbsItems, questions } from './search-results.constants';

const resultsCount = 187;

export default function GlobalSearchResults() {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs list={breadCrumbsItems} />
      <div
        className={styles.title}
      >
        {`Результаты поиска (${resultsCount})`}
      </div>
      <div className={styles.questions}>
        {questions.map((question, index) => {
          return (
            <div className={styles.questWrapper} key={index}>
              <div className={styles.questTitle}>{question.question}</div>
              <div className={styles.answer}>{question.answer}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
