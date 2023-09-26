import { 
  ChangeEvent,
  FC,
  MutableRefObject,
  useEffect,
  useId,
  useState
} from 'react';
import { PhoneInputProps } from './phone-input.types';
import { CloseBtn } from '@/shared/assets/svg';
import { useIMask } from 'react-imask';
import { volnaTheme as theme } from '../../constants/theme';
import cn from 'classnames';
import styles from './phone-input.module.scss';

export const PhoneInput: FC<PhoneInputProps> = ({
  changeHandler,
  clearHandler,
  containerWidth,
  darkBackground,
  errorMessage,
  id,
  isError,
  label,
  name,
  placeholder='+7 (978) 000 - 00 - 00',
  ref: nativeRef,
  value: initialValue,
}) => {
  const {
    ref,
    value,
    unmaskedValue,
    setValue
  } = useIMask({
    mask: '+7 (000) 000 - 00 - 00',
    lazy: true,
    placeholderChar: '_',
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
  };

  return (
    <div className={cn(styles.container, darkBackground && styles.dark)} style={{width: containerWidth}}>
      {label && 
        <label className={styles.label} htmlFor={id || inputId}>{label}</label>
      }
      <div className={cn(styles.inputWrapper, isActive && styles.isActive, isError && styles.isError)}>
        <input
          className={cn(styles.input, isError && styles.invalid, isActive && value && styles.activeInput)}
          value={value}
          ref={installRefs}
          onChange={onChange}
          autoComplete='off'
          placeholder={placeholder}
          name={name}
          id={id || inputId}
          onFocus={() => setIsActive(true)}
          onBlur={() => setTimeout(() => setIsActive(false))}
        />
        {isActive && value && 
          <button type='button' onClick={onClearInput} className={styles.closeBtn}>
            <CloseBtn color={isError ? 
              (darkBackground ? theme.colors.option.dance : theme.colors.error.fire) :
              (darkBackground ? theme.colors.base[200] : theme.colors.base[400])}
            />
          </button>
        }
      </div>
      {isError && errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </div>
  );
};
