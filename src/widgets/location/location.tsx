import React, { FC, useState } from "react";
import { Modal, Link } from "@/shared/ui-kit";
import { LOCATION_LIST, CITY_LIST } from "./constants";
import { LocationProps } from "./location.types";
import styles from './location.module.scss';
import { SearchInput } from "@/widgets/search-input/ui/search-input";

export const Location: FC<LocationProps> = ({ opened, onClose }) => {
  const [value, setValue] = useState('');

  const onClick = (value: string) => {
    setValue(value);
  };

  const handleChange = (value: string) => {
    setValue(value);
  };

  const handleInput = (value: string) => {
    setValue(value);
  };

  return (
    <Modal size='md' title='Выбор города' opened={opened} onClose={onClose}>
      <div className={styles.modal}>
        <SearchInput
          data={LOCATION_LIST}
          placeholder='Ваш город'
          className={styles.searchInputWrapper}
          value={value}
          onChange={handleChange}
          onInput={handleInput}
        />
        <div className={styles.links}>
          {CITY_LIST.map((city, i) =>
            <Link
              title={city}
              key={i}
              light={true}
              href='/'
              onClick={() => onClick(city)}
            />
          )}
        </div>
      </div>
    </Modal>
  )
}
