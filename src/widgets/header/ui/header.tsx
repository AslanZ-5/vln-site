import { NAVIGATION_MENU_LIST } from "../constans";
import styles from "./header.module.scss";
import { LogoIcon, SearchIcon, PackIcon, UserIcon } from "@/shared/assets/svg";
import Link from "next/link";
import { LINKS } from '@/shared/constants/links';
import { Sidebar } from "@/widgets/sidebar";

export function Header() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
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
        <Link href={LINKS.PERSONAL_CABINET} className={styles.user} >
          <UserIcon />
        </Link>
        <Link href={LINKS.PERSONAL_CABINET}className={styles.personal} >
          <PackIcon />
          Личный кабинет
        </Link>
      </div>
    </div>
  );
}
