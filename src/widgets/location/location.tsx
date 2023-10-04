import { FC } from "react";
import { Modal, Search } from "@/shared/ui-kit";
import { LOCATION_LIST, CITY_LIST } from "./constants";
import { LocationProps } from "./location.types";
import { Button } from "@/shared/ui-kit/button/button"

export const Location: FC<LocationProps> = ({ opened, onClose }) => {
  return (
    <Modal size='md' title='Выбор города' opened={opened} onClose={onClose}>
      <Search options={LOCATION_LIST} placeholder='Ваш город' />
      <div>
        {CITY_LIST.map((city, i) => <Button key={i} purpose='flat' size='xs'>{city}</Button>)}
      </div>
    </Modal>
  )
}
