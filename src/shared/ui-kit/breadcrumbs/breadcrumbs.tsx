import { Breadcrumbs as MantineBreadcrumbs, BreadcrumbsProps as MantineBreadcrumbsProps } from '@mantine/core';
import React, { FC } from 'react';
import { ArrowLeft, Separator } from '@/shared/assets/svg';
import styles from './breadcrumbs.module.scss';
import Link from 'next/link';
import cn from 'classnames';
import { useMobile } from '@/shared/lib/use-mobile';

export interface BreadcrumbsProps extends Partial<MantineBreadcrumbsProps> {
  list: BreadcrumbsList;
}

export type BreadcrumbsList = {
  title: string;
  href: string;
  id?: string;
}[];

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ list }) => {
  const { isMobile } = useMobile();

  if (isMobile) {
    const item = list.length === 1 ? list[list.length - 1] : list[list.length - 2];

    return (
      <Link className={styles.mobile_link} href={item.href}>
        <ArrowLeft />
        {item.title}
      </Link>
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
