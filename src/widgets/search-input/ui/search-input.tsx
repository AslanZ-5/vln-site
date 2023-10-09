import React, { FC, useState } from 'react';
import { SearchIcon } from "@/shared/assets/svg";
import styles from "./search-input.module.scss";
import { Autocomplete, CloseButton } from "@mantine/core";
import cn from "classnames";

interface SearchInputProps {
  onClose: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({ onClose }) => {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  const onInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    const eTarget = event.target as HTMLInputElement;
    setValue(eTarget.value);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <Autocomplete
      classNames={{
        root: styles.input__root,
        input: cn(styles.input__input),
        label: styles.input__label,
        wrapper: styles.input__wrapper,
      }}
      rightSection={
        <CloseButton className={styles.closeIcon} onClick={onClear} />
      }
      icon={<SearchIcon />}
      data={[
        "Как пополнить счет?",
        "Как попасть на сайт Волна Sale?",
        "Как попросить помощи у службы поддержки?",
        "Как попросить Катю о помощи?",
      ]}
      value={value}
      onInput={onInput}
      onChange={onChange}
    />
  );
}
