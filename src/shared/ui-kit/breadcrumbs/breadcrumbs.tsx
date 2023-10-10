import {
  Breadcrumbs as MantineBreadcrumbs,
  BreadcrumbsProps as MantineBreadcrumbsProps,
} from '@mantine/core';
import React, { FC } from 'react';
import { ArrowLeft, Separator } from '@/shared/assets/svg';
import styles from './breadcrumbs.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useMediaQuery } from '@mantine/hooks';
import { onlyMobile } from '@/shared/constants/media-queries';

export interface BreadcrumbsProps extends Partial<MantineBreadcrumbsProps> {
  list: {
    title: string;
    href: string;
    id?: string;
  }[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ list }) => {
  const isMobile = useMediaQuery(onlyMobile);

  if (isMobile) {
    const item = list[list.length - 2];

    return (
      <div className={styles.mobile__wrapper}>
        <ArrowLeft />
        <Link className={styles.mobile__link} href={item.href}>
          {item.title}
        </Link>
      </div>
    );
  }

  const items = list.map((item, idx) => (
    <Link
      className={cn(styles.link, list.length === idx + 1 && styles.link__last)}
      href={item.href}
      key={item.id || idx}
    >
      {item.title}
    </Link>
  ));

  return (
    <MantineBreadcrumbs
      classNames={{ separator: styles.breadcrumbs__separator, root: styles.breadcrumbs__root }}
      separator={<Separator />}
    >
      {items}
    </MantineBreadcrumbs>
  );
};
