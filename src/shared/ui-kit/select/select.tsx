import React, { FC, useState } from 'react';
import styles from './select.module.scss';
import { ChevronDown, ChevronUp } from '@/shared/assets/icons';
import { Select as MantineSelect, SelectProps as MantineSelectProps } from '@mantine/core';
import { volnaTheme as theme } from '@/shared/constants/theme';
import cn from 'classnames';

export interface SelectProps extends Partial<MantineSelectProps> {
  data: string[];
  className?: string;
  light?: boolean;
}

export const Select: FC<SelectProps> = ({ data, className, disabled, light, ...props }) => {
  const [opened, setOpened] = useState(false);

  return (
    <MantineSelect
      data={data}
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

/* <Container $containerWidth={containerWidth}>
        {label && (
          <Label $disabled={disabled} htmlFor={inputId || id}>
            {label}
          </Label>
        )}
        <InputWrapper
          $withBorder={withBorder}
          $backgroundColor={backgroundColor}
          onClick={() => !disabled && setOpen((t) => !t)}
        >
          <Input
            id={inputId || id}
            placeholder={placeholder}
            value={inputValue}
            autoComplete='off'
            type='text'
            name={name}
            $disabled={disabled}
          />
          <img
            src={(disabled && disabledArrow) || ((open || isOpen) && arrowUp) || arrowDown}
            alt='arrowIcon'
          />
        </InputWrapper>
        {(isOpen || open) && (
          <List $withBorder={withBorder} $backgroundColor={backgroundColor}>
            {data?.map((item, index) => (
              <Item key={index} onClick={() => selectHandler(item)}>
                {item}
              </Item>
            ))}
          </List>
        )}
      </Container> */
