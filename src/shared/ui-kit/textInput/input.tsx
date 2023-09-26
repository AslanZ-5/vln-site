import { useId, FC } from 'react';
import { InputProps } from './input.types';
import './input.scss';
import clearIcon from './clearIcon.svg';

export const Input: FC<InputProps> = ({
  containerStyle,
  disabled,
  errorMessageStyle,
  errorMessage,
  handleClearInput,
  id,
  inputProps,
  inputRef,
  inputStyle,
  isError,
  labelStyle,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  value,
  withBorder,
  wrapperStyle,
}) => {
  const inputId = useId();
  const template = withBorder ? 'outlined' : 'default';
  const variant = isError ? 'invalid' : disabled ? 'disabled' : 'default';
  return (
    <div className='storybook-input--container' style={containerStyle}>
      {label && (
        <label
          htmlFor={id || inputId}
          className={disabled ? 'storybook-input--label-disabled' : 'storybook-input--label'}
          style={labelStyle}
        >
          {label}
        </label>
      )}
      <div className={`storybook-input--${template}-wrapper-${variant}`} style={wrapperStyle}>
        <input
          id={id || inputId}
          disabled={disabled}
          className={disabled ? 'storybook-input--field-disabled' : 'storybook-input--field'}
          type='text'
          name={name}
          style={inputStyle}
          value={value}
          ref={inputRef}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete='off'
          {...inputProps}
        />
        {isError && <img src={clearIcon} onClick={handleClearInput} />}
      </div>
      {errorMessage && (
        <div className='storybook-input--error' style={errorMessageStyle}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};
