import { FC } from "react";
import { Modal, Search, Link } from "@/shared/ui-kit";
import { LOCATION_LIST, CITY_LIST } from "./constants";
import { LocationProps } from "./location.types";
import styles from './location.module.scss';

export const Location: FC<LocationProps> = ({ opened, onClose }) => {
  return (
    <Modal size='md' title='Выбор города' opened={opened} onClose={onClose}>
      <div className={styles.modal}>
        <Search options={LOCATION_LIST} placeholder='Ваш город' />
        <div className={styles.links}>
          { CITY_LIST.map((city, i) => 
            <Link
              title={city}
              key={i}
              light={true}
              href='/'
            />
          )}
        </div>
      </div>
    </Modal>
  )
}
