import React, { FC, useState } from 'react';
import styles from './select.module.scss';
import { ChevronDown, ChevronUp } from '@/shared/assets/icons';
import { Select as MantineSelect, SelectProps as MantineSelectProps } from '@mantine/core';
import { volnaTheme as theme } from '@/shared/constants/theme';
import cn from 'classnames';

export interface SelectProps extends MantineSelectProps {
  className?: string;
  light?: boolean;
}

export const Select: FC<SelectProps> = ({ className, disabled, light, ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <MantineSelect
      disabled={disabled}
      limit={6}
      {...props}
      classNames={{
        root: cn(
          styles.root,
          light && styles.light,
          disabled && styles.disabled,
          className && className
        ),
        wrapper: styles.wrapper,
        input: styles.input,
        dropdown: styles.dropdown,
        label: styles.label,
        error: styles.error,
        rightSection: styles.right_section,
        itemsWrapper: styles.dropdown__items_wrapper,
        item: styles.dropdown__item,
      }}
      rightSection={
        opened ? (
          <ChevronUp color={theme.colors.base[900]} />
        ) : (
          <ChevronDown color={disabled ? theme.colors.base[400] : theme.colors.base[900]} />
        )
      }
      rightSectionWidth={60}
      onDropdownOpen={() => setOpened(true)}
      onDropdownClose={() => setOpened(false)}
    />
  );
};
