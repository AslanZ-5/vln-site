import { FC, useId, useState } from 'react';
import { SearchProps } from './search.types';
import searchIcon from './searchIcon.svg';
import disabledSearchIcon from './disabledSearchIcon.svg';
import { Container, Label, InputWrapper, Error, List, Item } from './constants';
import styles from './search.module.scss';

export const Search: FC<SearchProps> = ({
  options,
  label,
  placeholder,
  inputId,
  containerWidth,
  value,
  errorMessage,
  isError,
  disabled,
  withBorder,
  backgroundColor,
  filter,
  onSelect,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const id = useId();
  const filtered = options
    ? options.filter((item) => {
        if (filter) {
          return filter(item);
        }
        if (inputValue === '') return false;
        const lowerCaseItem = item.toLowerCase();
        const lowerCaseValue = inputValue.toLowerCase();
        if (lowerCaseItem === lowerCaseValue) return false;
        return lowerCaseItem.includes(lowerCaseValue);
      })
    : [];
  const selectHandler = (str: string) => {
    onSelect && onSelect(str);
    setInputValue(str);
  };
  const onInputChange = (str: string) => {
    onChange && onChange(str);
    setInputValue(str);
  };
  const optionsArr = filtered.length
    ? filtered.map((item, index) => (
        <Item key={index} onClick={() => selectHandler(item)}>
          {item}
        </Item>
      ))
    : null;
  return (
    <Container $containerWidth={containerWidth}>
      {label && (
        <Label $disabled={disabled} htmlFor={id || inputId}>
          {label}
        </Label>
      )}
      <InputWrapper $isError={isError} $withBorder={withBorder} $backgroundColor={backgroundColor}>
        <img src={disabled ? disabledSearchIcon : searchIcon} alt="searchIcon" />
        {/*<Input
          $isError={isError}
          $disabled={disabled}
          autoComplete='off'
          type='search'
          id={inputId || id}
          placeholder={placeholder}
          value={inputValue}
          onChange={e => onInputChange(e.target.value)}
          disabled={disabled}
        />*/}
        <input
          type="search"
          value={inputValue}
          placeholder={placeholder}
          id={inputId || id}
          className={styles.input}
          onChange={(e) => onInputChange(e.target.value)}
          disabled={disabled}
        />
      </InputWrapper>
      {isError && <Error>{errorMessage}</Error>}
      {disabled
        ? null
        : optionsArr && (
            <List $withBorder={withBorder} $backgroundColor={backgroundColor}>
              {optionsArr}
            </List>
          )}
    </Container>
  );
};
