import React from "react";
import cn from "classnames";
import { Burger } from "@mantine/core";
import {
  BackArrow,
  Frame,
  Home,
  LogoIcon,
  MenuIcon,
  Phone,
  Pin_2,
  Simcard,
} from "@/shared/assets/svg";
import IconButton from "./partials/icon-button/icon-button";
import CategoryBtn from "./partials/category-btn/category-button";
import { categoryBtn } from "./partials/constants";
import { useSidebar } from "./use-sidebar";
import styles from "./sidebar.module.scss";
import { useMobile } from "@/shared/lib/useMobile";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Link from "next/link";
import { LINKS } from '@/shared/constants/links';
import { Tooltip } from "@/shared/ui-kit/tooltip/tooltip";
import { Location } from "@/widgets/location";
import { useLocation } from "@/widgets/location/use-location";

const Sidebar = React.memo(() => {
  const { isMobile, isTablet } = useMobile();
  const {
    activeItem,
    sidebarOpen,
    activeCategory,
    prevSidebarState,
    isFullSidebar,
    sidebarOptions,
    handleToggleSidebar,
    handleChangeCategory,
    handleCloseSideBar,
    handleBackPrevState,
    handleGoInto,
  } = useSidebar();
  const {
    locationModalOpened,
    location,
    handleLocationModalOpen,
    handleLocationModalClose
  } = useLocation();

  const renderOptions = sidebarOptions.map((el, ind) => {
    const isActive = el.id === activeItem;
    return (
      <Tooltip text={(el.Title)} backgroundColor="#282D3C" position="side" key={ind}>
        <IconButton
          onClick={handleGoInto(el.Title, el.childrens, el.id)}
          nestedOptions={el.childrens}
          classname={styles.hoverIcon}
          active={isActive}
          visibleChildren={sidebarOpen}
          showActiveLine={isActive}
          Icon={el.Icon && (() => <el.Icon />)}
        >
          {el.src ? <Link href={el.src}>{el.Title}</Link> : el.Title}
        </IconButton>
      </Tooltip>
    );
  });

  const renderCategoryBtns = categoryBtn.map((el, ind) => (
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
      visibleChildren={sidebarOpen}
      Icon={() => <BackArrow />}
    >
      {prevSidebarState.current.at(-1)?.name}
    </IconButton>
  );

  if (isMobile) {
    return (
      <>
        <Location opened={locationModalOpened} onClose={handleLocationModalClose} />
        <div
          onClick={handleCloseSideBar}
          className={cn(sidebarOpen && styles.openBackground)}
        />
        <div className={styles.mobile}>
          <div className={styles.mobileIconsWrapper}>
            <IconButton
              innerLabel="Меню"
              onClick={handleToggleSidebar}
              Icon={MenuIcon}
              active={sidebarOpen}
            />
            <IconButton innerLabel="Связь" Icon={Phone} />
            <IconButton innerLabel="Интернет" Icon={Home} />
            <Link href={LINKS.VOLNA_SALE}><IconButton innerLabel="Волна Sale" Icon={Frame} /></Link>
            <Link href={LINKS.ESIM}><IconButton innerLabel="eSIM" Icon={Simcard} /></Link>
          </div>
          <BottomSheet
            blocking={false}
            onDismiss={handleCloseSideBar}
            open={sidebarOpen}
          >
            <div className={styles.categoryWrapper}>{renderCategoryBtns}</div>
            <div
              className={cn(
                styles.contentMobile,
                sidebarOpen && styles.contentVisible
              )}
            >
              {Boolean(prevSidebarState.current.length) && renderBackButton}
              {renderOptions}
            </div>
          </BottomSheet>
        </div>
      </>
    );
  }

  return (
    <div
      onClick={handleCloseSideBar}
      className={cn(styles.wrapper, sidebarOpen && styles.openBackground)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(styles.closed, sidebarOpen && styles.opened)}
      >
        <div className={styles.controlBlock}>
          <IconButton
            visibleChildren={sidebarOpen}
            onClick={handleToggleSidebar}
            Icon={() => <Burger opened={sidebarOpen} />}
          >
            <div className={styles.logoIcon}>
              <LogoIcon />
            </div>
          </IconButton>
        </div>
        {isFullSidebar && (
          <div className={styles.categoryWrapper}>{renderCategoryBtns}</div>
        )}

        <div
          className={cn(styles.content, sidebarOpen && styles.contentVisible)}
        >
          {Boolean(prevSidebarState.current.length) && renderBackButton}
          {!isTablet || (isTablet && sidebarOpen) ? renderOptions : null}
        </div>

        {isFullSidebar && (
          <div className={styles.footer}>
            <IconButton
              classname={styles.hoverIcon}
              visibleChildren={sidebarOpen}
              Icon={() => <Pin_2 />}
              onClick={handleLocationModalOpen}
            >
              {location}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
export { Sidebar };
