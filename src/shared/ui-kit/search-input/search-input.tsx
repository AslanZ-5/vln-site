import React, { FC, useRef, useState, useEffect } from 'react';
import { SearchIcon } from "@/shared/assets/svg";
import styles from "./search-input.module.scss";
import { Autocomplete, CloseButton } from "@mantine/core";
import cn from "classnames";
import { useOutsideHandler } from "@/shared/lib/use-outside-click-handler";

interface SearchInputProps<Item> {
  data: ReadonlyArray<string | Item>;
  placeholder?: string;
  onClose?: () => void;
  onClickOutside?: () => void;
  className?: string;
  value?: string;
  onChange?(value: Item): void;
  onInput?(value: Item): void;
}

export const SearchInput: FC<SearchInputProps<string>> = ({
  onClose,
  onClickOutside,
  data,
  placeholder,
  className,
  value,
  onChange,
  onInput,
}) => {
  const [value_, setValue] = useState<string | undefined>(value || '');
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleChange = (value: string) => {
    setValue(value);
    onChange?.(value);
  };

  const handleInput: React.FormEventHandler<HTMLInputElement> = (event) => {
    const eTarget = event.target as HTMLInputElement;
    setValue(eTarget.value);
    onInput?.(eTarget.value);
  };

  const onClear = () => {
    setValue('');
  };

  useOutsideHandler(wrapperRef, target => {
    if (!target?.closest('.mantine-Autocomplete-dropdown')) {
      onClickOutside?.();
    }
  });

  useEffect(() => {
    if (value !== value_) {
      setValue(value);
    }
  }, [value, value_]);

  return (
    <div ref={wrapperRef} className={className}>
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
        data={data}
        value={value_}
        placeholder={placeholder}
        onInput={handleInput}
        onChange={handleChange}
      />
    </div>
  );
}
