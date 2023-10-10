import React, { FC, useState } from 'react';
import { CloseBtn } from '@/shared/assets/icons';
import { volnaTheme as theme } from '@/shared/constants/theme';
import cn from 'classnames';
import styles from './phone-input.module.scss';
import { Input, InputProps } from '@mantine/core';
import { IMaskInput } from 'react-imask';

interface PhoneInputProps extends InputProps {
  onChange?: (value: string) => void;
  darkBackground?: boolean;
  label?: string;
  mask?: string;
  placeholder?: string;
  value?: string;
}

export const PhoneInput: FC<PhoneInputProps> = ({
  onChange: changeHandler,
  darkBackground,
  error,
  disabled,
  label,
  mask,
  placeholder = '+7 (___) ___ - __ - __',
  value: initialValue,
  className,
  ...props
}) => {
  const [value, setValue] = useState(initialValue || '');
  const [isActive, setIsActive] = useState(false);

  const onChange = (val: string) => {
    changeHandler && changeHandler(val);
    setValue(val);
  };

  return (
    <Input.Wrapper
      classNames={{
        root: cn(styles.wrapper__root, darkBackground && styles.dark, className && className),
        label: styles.wrapper__label,
        error: styles.wrapper__error,
      }}
      error={error}
      label={label}
    >
      <Input
        classNames={{
          input: styles.input__input,
          rightSection: styles.input__right_section,
          wrapper: styles.input__wrapper,
        }}
        disabled={disabled}
        error={error}
        value={value}
        placeholder={placeholder}
        onInput={(event) => onChange(event.currentTarget.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        component={IMaskInput}
        mask={[
          {
            mask: '',
          },
          {
            mask: mask || '+7 (000) 000 - 00 - 00',
            lazy: false,
            placeholderChar: '_',
          },
        ]}
        rightSectionWidth={60}
        rightSection={
          <button
            type='button'
            onClick={() => onChange('')}
            className={cn(styles.closeBtn, value && isActive && styles.visible)}
          >
            <CloseBtn
              color={
                error
                  ? darkBackground
                    ? theme.colors.option.dance
                    : theme.colors.error.fire
                  : darkBackground
                  ? theme.colors.base[200]
                  : theme.colors.base[400]
              }
            />
          </button>
        }
        {...props}
      />
    </Input.Wrapper>
  );
};
