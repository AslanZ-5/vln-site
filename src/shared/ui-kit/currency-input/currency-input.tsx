import { 
    ChangeEvent,
    FC,
    MutableRefObject,
    useEffect,
    useId,
    useState
} from 'react';
import { CurrencyInputProps } from './currency-input.types';
import { CloseBtn } from '@/shared/assets/icons';
import { useIMask } from 'react-imask';
import { volnaTheme as theme } from '@/shared/constants/theme';
import cn from 'classnames';
import styles from './currency-input.module.scss';
  
export const CurrencyInput: FC<CurrencyInputProps> = ({
  changeHandler,
  clearHandler,
  className,
  containerWidth,
  darkBackground,
  errorMessage,
  id,
  isError,
  label,
  name,
  placeholder='100 ₽ - 15 000 ₽',
  ref: nativeRef,
  value: initialValue,
}) => {
  const {
    ref,
    value,
    unmaskedValue,
    setValue
  } = useIMask({
    mask: [
      { mask: '' },
      {
        mask: 'num ₽',
        lazy: false,
        blocks: {
          num: {
            mask: Number,
            min: 1,
            thousandsSeparator: ' '
          }
        }
      }
    ]
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
    <div className={cn(styles.container, darkBackground && styles.dark, className && className)} style={{width: containerWidth}}>
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
