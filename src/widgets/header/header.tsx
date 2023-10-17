import { ReactNode, useState } from 'react';
import Link from 'next/link';
import styles from './header.module.scss';
import { NAVIGATION_MENU_LIST } from './constans';
import { LogoIcon, SearchIcon, PackIcon, UserIcon } from '@/shared/assets/svg';
import { LINKS } from '@/shared/constants/links';
import { SearchInput } from '@/shared/ui-kit/search-input/search-input';
import { useMobile } from '@/shared/lib/use-mobile';
import cn from 'classnames';
import { mockData } from '@/shared/constants/mock';

export function Header({ children }: {children: ReactNode }) {
  const [openInput, setOpenInput] = useState(false);

  const onSearchInputFocus = () => {
    setOpenInput(true);
  };

  const onSearchInputLostFocus = () => {
    setOpenInput(false);
  };

  const { isMobile } = useMobile();

  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.logo}>
        <Link href={'/'}>
          <LogoIcon />
        </Link>

      </div>
      <div className={openInput ? styles.navigationHiden : styles.navigation}>
        {NAVIGATION_MENU_LIST.map((list) => (
          <div key={list.id}>
            <Link href={list.path}>{list.label}</Link>
          </div>
        ))}
      </div>
      <div className={cn(styles.rightSide, openInput && styles.searchOpen)}>
        {!isMobile && (
          <div className={styles.search}>
            {openInput ? (
              <SearchInput
                onClose={onSearchInputLostFocus}
                data={mockData.globalSearchData}
                onClickOutside={onSearchInputLostFocus}
                className={styles.searchInputWrapper}
              />
            ) : (
              <SearchIcon onClick={onSearchInputFocus} />
            )}
          </div>
        )}
        <Link href={LINKS.PERSONAL_CABINET} className={styles.user}>
          <UserIcon />
        </Link>
        <Link href={LINKS.PERSONAL_CABINET} className={styles.personal}>
          <PackIcon />
          Личный кабинет
        </Link>
      </div>
    </div>
  );
}
