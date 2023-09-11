import { NAVIGATION_MENU_LIST } from "../constans";
import cn from "classnames";
import styles from "./header.module.css";

import { LogoIcon, SearchIcon, PackIcon } from "@/shared/assets/svg";
import Link from "next/link";

export function Header() {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>
      <div className={styles.links_wrapper}>
        {NAVIGATION_MENU_LIST.map((list) => (
          <div key={list.id}>
            <Link href={list.path}>{list.label}</Link>
          </div>
        ))}
      </div>
      <div className={styles.search_lk_wrapper}>
        <div>
          <SearchIcon />
        </div>

        <button className={styles.lk_wrapper}>
          <PackIcon />
          Личный кабинет
        </button>
      </div>
    </div>
  );
}
