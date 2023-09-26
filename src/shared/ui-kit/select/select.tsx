import { FC, useId, useState } from 'react';
import { SelectProps } from './select.types';
import arrowUp from './arrowUp.svg';
import arrowDown from './arrowDown.svg';
import disabledArrow from './disabledArrow.svg';
import { Container, Label, InputWrapper, Input, List, Item } from './constants';

export const Select: FC<SelectProps> = ({
  backgroundColor,
  containerWidth,
  disabled,
  inputId,
  isOpen,
  label,
  name,
  onSelect,
  options,
  placeholder,
  withBorder,
  value,
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const selectHandler = (str: string) => {
    if (str === inputValue) {
      setInputValue('');
      setOpen(false);
      onSelect && onSelect('');
      return;
    }
    onSelect && onSelect(str);
    setInputValue(str);
    setOpen(false);
  };
  const id = useId();
  return (
    <Container $containerWidth={containerWidth}>
      {label && (
        <Label $disabled={disabled} htmlFor={inputId || id}>
          {label}
        </Label>
      )}
      <InputWrapper
        $withBorder={withBorder}
        $backgroundColor={backgroundColor}
        onClick={() => !disabled && setOpen(t => !t)}
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
        <img src={(disabled && disabledArrow) || ((open || isOpen) && arrowUp) || arrowDown} alt='arrowIcon' />
      </InputWrapper>
      {(isOpen || open) && (
        <List $withBorder={withBorder} $backgroundColor={backgroundColor}>
          {options?.map((item, index) => <Item key={index} onClick={() => selectHandler(item)}>{item}</Item>)}
        </List>
      )}
    </Container>
  );
};
