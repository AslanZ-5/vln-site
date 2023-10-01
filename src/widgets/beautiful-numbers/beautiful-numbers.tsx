import React, { useState, useEffect, useRef } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import Card from '@/shared/ui-kit/card/card';
import styles from './beautiful-numbers.module.scss';
import { ChevronRight } from '@/shared/assets/icons';
import Link from 'next/link';

const OFFSET = 10;

function BeautifulNumbers() {
  const theme = useMantineTheme();

  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timer>();
  const [currentNumber, setCurrentNumber] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      intervalRef.current = setInterval(() => {
        setCurrentNumber(prev => {
          if (prev < 1) {
            return 9;
          }
          return prev - 1;
        });

      }, 10);

      setTimeout(() => {
        setIsAnimating(false);
        clearInterval(intervalRef.current);
      }, 1000);
    }
  };

  const getNumberStyle = (i: number) => {
    const m = i - currentNumber;

    return {
      transform: `translate(0, ${m * OFFSET}px)`,
    };
  };

  useEffect(() => {
    setRandomNumbers(getRandomNumbers());
  }, []);

  return (
    <Card className={styles.card} padding={'24px 20px'} radius={24}>
      <Link href={''} className={styles.link}>
        {/* нужно будет добавить ссылку на страницу домашнего интернета*/}
        <span className={styles.link__text}>
          Красивые номера
        </span>
        <ChevronRight className={styles.link__chevron} color={theme.other.colors.base[0]} />
      </Link>
      <div className={styles.content}>
        <div className={styles.foregroundGradient} />
        <div className={styles.description}>
          Эксклюзивные престижные номера для личных и деловых целей
        </div>
        <div className={styles.numbers}>
          {randomNumbers.map((n, i) => {
            return (
              <div
                key={i}
                className={styles.phoneNumber}
                style={getNumberStyle(i)}
                onClick={handleClick}
              >
                {n}
              </div>
            );
          })}
          <span className={styles.prefix}>+7(978)</span>
        </div>
      </div>
      <Button
        classNames={{
          root: styles.button__root,
        }}
      >
        Купить от 500 руб.
      </Button>
    </Card>
  );
}

function getRandomNumbers() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    let number = '';
    for (let j = 0; j < 7; j++) {
      const digit = randomIntFromInterval(0, 9);
      if (j === 3 || j === 5) {
        number += '-' + digit;
      } else {
        number += digit;
      }
    }
    result.push(number);
  }

  return result;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { BeautifulNumbers };
