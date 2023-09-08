import {
  NAVIGATION_MAIN,
  NAVIGATION_PATHNAME,
  NAVIGATION_LABELS,
  NAVIGATION_MENU_LIST,
} from "../constans";
import cn from "classnames";
import styles from "./header.module.css";
import "../../../../public/logo.svg";
import "../../../../public/search.svg";
import "../../../../public/pack.svg";

export function Header() {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.logo}>
        <a href="/">
          <img src="logo.svg" alt="Icon" />
        </a>
      </div>
      <div className={styles.links_wrapper}>
        {NAVIGATION_MENU_LIST.map((list) => (
          <div key={list.id}>
            <a href={list.path}>{list.label}</a>
          </div>
        ))}
      </div>
      <div className={styles.search_lk_wrapper}>
        <div>
          <a href="/">
            <img src="search.svg" alt="search" />
          </a>
        </div>
        <a href="/">
          <button className={styles.lk_wrapper}>
            <img src="pack.svg" alt="pack" />
            Личный кабинет
          </button>
        </a>
      </div>
    </div>
  );
}
