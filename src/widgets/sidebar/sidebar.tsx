import React from 'react';
import cn from 'classnames';
import { Burger } from '@mantine/core';
import { BackArrow, Frame, Home, LogoIcon, MenuIcon, Phone, Pin_2, Simcard } from '@/shared/assets/svg';
import IconButton from './icon-button/icon-button';
import CategoryBtn from './category-btn/category-button';
import { categoryBtn } from './constants';
import { useSidebar } from './use-sidebar';
import styles from './sidebar.module.scss';
import { useMobile } from '@/shared/lib/use-mobile';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import Link from 'next/link';
import { LINKS } from '@/shared/constants/links';
import { Tooltip } from '@/shared/ui-kit/tooltip/tooltip';
import { Location } from '@/widgets/location';
import { useLocation } from '@/widgets/location/use-location';
import { SearchInput } from '@/shared/ui-kit/search-input/search-input';
import { mockData } from '@/shared/constants/mock';

interface SidebarProps {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
}

const Sidebar: React.FC<SidebarProps> = React.memo((props) => {
  const { isOpen, onOpen, onClose } = props;

  const { isMobile, isDesktop } = useMobile();
  const {
    activeItem,
    activeCategory,
    prevSidebarState,
    isFullSidebar,
    sidebarOptions,
    handleOpenSideBar,
    handleChangeCategory,
    handleCloseSideBar,
    handleBackPrevState,
    handleGoInto,
  } = useSidebar({
    isOpen,
    onClose,
    onOpen,
  });
  const { locationModalOpened, location, handleLocationModalOpen, handleLocationModalClose } = useLocation();

  const renderOptions = sidebarOptions.map((el, ind) => {
    const isActive = el.id === activeItem;
    const button = (
      <Link href={el.src || ''}>
        <IconButton
          onClick={handleGoInto(el.Title, el.children, el.id)}
          nestedOptions={el.children}
          classname={styles.hoverIcon}
          key={ind}
          active={isActive}
          visibleChildren={isOpen}
          showActiveLine={isActive}
          Icon={el.Icon && (() => <el.Icon />)}
        >
          {el.Title}
        </IconButton>
      </Link>
    );

    if (isMobile) {
      return button;
    } else {
      return (
        <Tooltip text={el.Title} backgroundColor='#282D3C' position='side' key={el.Title}>
          {button}
        </Tooltip>
      );
    }
  });

  const renderCategoryItems = categoryBtn.map((el, ind) => (
    <CategoryBtn
      onClick={handleChangeCategory(ind)}
      key={ind}
      active={ind === activeCategory}
      title={el.name}
      src={el?.src}
    />
  ));

  const renderBackButton = (
    <IconButton
      onClick={handleBackPrevState}
      classname={styles.hoverIcon}
      visibleChildren={isOpen}
      Icon={() => <BackArrow />}
    >
      {prevSidebarState.current.at(-1)?.name}
    </IconButton>
  );

  if (isMobile) {
    return (
      <>
        <Location opened={locationModalOpened} onClose={handleLocationModalClose} />
        <div onClick={handleCloseSideBar} className={cn(isOpen && styles.openBackground)} />
        <div className={styles.mobile}>
          <div className={styles.mobileIconsWrapper}>
            <IconButton innerLabel='Меню' onClick={isOpen ? onClose : onOpen} Icon={MenuIcon} active={isOpen} />
            <IconButton innerLabel='Связь' Icon={Phone} />
            <IconButton innerLabel='Интернет' Icon={Home} />
            <Link href={LINKS.VOLNA_SALE}>
              <IconButton innerLabel='Волна Sale' Icon={Frame} />
            </Link>
            <Link href={LINKS.ESIM}>
              <IconButton innerLabel='eSIM' Icon={Simcard} />
            </Link>
          </div>
          <BottomSheet blocking={false} onDismiss={handleCloseSideBar} open={isOpen}>
            <SearchInput data={mockData.globalSearchData} />
            <div className={styles.categoryWrapper}>{renderCategoryItems}</div>
            <div className={cn(styles.contentMobile, isOpen && styles.contentVisible)}>
              {Boolean(prevSidebarState.current.length) && renderBackButton}
              {renderOptions}
            </div>
          </BottomSheet>
        </div>
      </>
    );
  }

  return (
    <>
      <Location opened={locationModalOpened} onClose={handleLocationModalClose} />
      <div onClick={handleCloseSideBar} className={cn(styles.wrapper, isOpen && styles.openBackground)}>
        <div onClick={(e) => e.stopPropagation()} className={cn(styles.closed, isOpen && styles.opened)}>
          <div className={styles.controlBlock}>
            <IconButton
              visibleChildren={isOpen}
              onClick={isOpen ? handleCloseSideBar : handleOpenSideBar}
              Icon={() => <Burger opened={isOpen} />}
            >
              <div className={styles.logoIcon}>
                <LogoIcon />
              </div>
            </IconButton>
          </div>
          {isFullSidebar && <div className={styles.categoryWrapper}>{renderCategoryItems}</div>}

          <div className={cn(styles.content, isOpen && styles.contentVisible)}>
            {Boolean(prevSidebarState.current.length) && renderBackButton}
            {isDesktop || isOpen ? renderOptions : null}
          </div>

          {isFullSidebar && (
            <div className={styles.footer}>
              <IconButton
                classname={styles.hoverIcon}
                visibleChildren={isOpen}
                Icon={() => <Pin_2 />}
                onClick={handleLocationModalOpen}
              >
                {location}
              </IconButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
});

Sidebar.displayName = 'Sidebar';
export { Sidebar };
