import { useId, FC } from 'react';
import { TextareaProps } from './textarea.types';

import { Container, Error, Label, StyledTextarea, Wrapper } from './constants';

export const TextArea: FC<TextareaProps> = ({
  backgroundColor,
  containerWidth,
  disabled,
  errorMessage,
  id,
  isError,
  label,
  name,
  onBlur,
  onChange,
  placeholder,
  textareaHeight,
  textareaProps,
  textareaRef,
  value,
  withBorder,
}) => {
  const inputId = useId();

  return (
    <Container $containerWidth={containerWidth}>
      {label && (
        <Label $disabled={disabled} htmlFor={id || inputId}>
          {label}
        </Label>
      )}
      <Wrapper
        $withBorder={withBorder}
        $isError={isError}
        $backgroundColor={backgroundColor}
        $textareaHeight={textareaHeight}
      >
        <StyledTextarea
          $disabled={disabled}
          id={id || inputId}
          disabled={disabled}
          name={name}
          value={value}
          ref={textareaRef}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete='off'
          {...textareaProps}
        />
      </Wrapper>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  );
};
