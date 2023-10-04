import { ChangeEvent, FC, MutableRefObject, useEffect, useId, useState } from 'react';
import { PhoneInputProps } from './phone-input.types';
import { CloseBtn } from '@/shared/assets/icons';
import { useIMask } from 'react-imask';
import { volnaTheme as theme } from '@/shared/constants/theme';
import cn from 'classnames';
import styles from './phone-input.module.scss';

export const PhoneInput: FC<PhoneInputProps> = ({
  changeHandler,
  clearHandler,
  className,
  containerWidth,
  darkBackground,
  errorMessage,
  id,
  isError,
  isReady,
  label,
  mask,
  name,
  placeholder = '+7 (___) ___ - __ - __',
  ref: nativeRef,
  value: initialValue,
}) => {
  const { ref, value, unmaskedValue, setValue } = useIMask({
    mask: [
      {
        mask: '',
      },
      {
        mask: mask || '+7 (000) 000 - 00 - 00',
        lazy: false,
        placeholderChar: '_',
      },
    ],
  });

  const [isActive, setIsActive] = useState(false);
  const inputId = useId();

  const installRefs = (instance: HTMLInputElement) => {
    (ref as MutableRefObject<HTMLInputElement>).current = instance;

    if (nativeRef) {
      (nativeRef as MutableRefObject<HTMLInputElement>).current = instance;
    }
  };

  useEffect(() => {
    if (initialValue || initialValue === '') {
      setValue && setValue(initialValue);
    }
  }, [initialValue, setValue]);

  const onClearInput = () => {
    setValue && setValue('');
    clearHandler && clearHandler();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    changeHandler && changeHandler(value, unmaskedValue, event);
    unmaskedValue.length === 10 && isReady && isReady(unmaskedValue);
  };

  return (
    <div
      className={cn(styles.container, darkBackground && styles.dark, className && className)}
      style={{ width: containerWidth }}
    >
      {label && (
        <label className={styles.label} htmlFor={id || inputId}>
          {label}
        </label>
      )}
      <div
        className={cn(styles.inputWrapper, isActive && styles.isActive, isError && styles.isError)}
      >
        <input
          className={cn(styles.input, isError && styles.invalid)}
          value={value}
          ref={installRefs}
          onInput={onChange}
          autoComplete='off'
          placeholder={placeholder}
          name={name}
          id={id || inputId}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <button
          type='button'
          onClick={onClearInput}
          className={cn(styles.closeBtn, value && isActive && styles.visible)}
        >
          <CloseBtn
            color={
              isError
                ? darkBackground
                  ? theme.colors.option.dance
                  : theme.colors.error.fire
                : darkBackground
                ? theme.colors.base[200]
                : theme.colors.base[400]
            }
          />
        </button>
      </div>
      {isError && errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
