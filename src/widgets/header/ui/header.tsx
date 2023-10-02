import { NAVIGATION_MENU_LIST } from "../constans";
import styles from "./header.module.scss";
import { LogoIcon, SearchIcon, PackIcon, UserIcon } from "@/shared/assets/svg";
import Link from "next/link";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.navigation}>
        {NAVIGATION_MENU_LIST.map((list) => (
          <div key={list.id}>
            <Link href={list.path}>{list.label}</Link>
          </div>
        ))}
      </div>
      <div className={styles.rightSide} >
        <div className={styles.search} >
          <SearchIcon />
        </div>
        <div className={styles.user} >
          <UserIcon />
        </div>
        <Link href={'https://lk-new.volnamobile.ru/'}className={styles.personal} >
          <PackIcon />
          Личный кабинет
        </Link>
      </div>
    </div>
  );
}
