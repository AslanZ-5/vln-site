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
import IconButton from "./icon-button/icon-button";
import CategoryBtn from "./category-btn/category-button";
import { categoryBtn } from "./constants";
import { useSidebar } from "./use-sidebar";
import styles from "./sidebar.module.scss";
import { useMobile } from "@/shared/lib/use-mobile";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Link from "next/link";
import { LINKS } from "@/shared/constants/links";
import { Tooltip } from "@/shared/ui-kit/tooltip/tooltip";
import { Location } from "@/widgets/location";
import { useLocation } from "@/widgets/location/use-location";
import { SearchInput } from "@/shared/ui-kit/search-input/search-input";
import { mockData } from "@/shared/constants/mock";

const Sidebar = React.memo(() => {
  const { isMobile, isDesktop } = useMobile();
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
    handleLocationModalClose,
  } = useLocation();

  const renderOptions = sidebarOptions.map((el, ind) => {
    const isActive = el.id === activeItem;
    const button = (
      <IconButton
        onClick={handleGoInto(el.Title, el.children, el.id)}
        nestedOptions={el.children}
        classname={styles.hoverIcon}
        key={ind}
        active={isActive}
        visibleChildren={sidebarOpen}
        showActiveLine={isActive}
        Icon={el.Icon && (() => <el.Icon />)}
      >
        {el.src ? <Link href={el.src}>{el.Title} НЕ работает !</Link> : el.Title}
      </IconButton>
    );

    if (isMobile) {
      return button;
    } else {
      return (
        <Tooltip
          text={el.Title}
          backgroundColor="#282D3C"
          position="side"
          key={el.Title}
        >
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
      visibleChildren={sidebarOpen}
      Icon={() => <BackArrow />}
    >
      {prevSidebarState.current.at(-1)?.name}
    </IconButton>
  );

  if (isMobile) {
    return (
      <>
        <Location
          opened={locationModalOpened}
          onClose={handleLocationModalClose}
        />
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
            <Link href={LINKS.VOLNA_SALE}>
              <IconButton innerLabel="Волна Sale" Icon={Frame} />
            </Link>
            <Link href={LINKS.ESIM}>
              <IconButton innerLabel="eSIM" Icon={Simcard} />
            </Link>
          </div>
          <BottomSheet
            blocking={false}
            onDismiss={handleCloseSideBar}
            open={sidebarOpen}
          >
            <SearchInput data={mockData.globalSearchData} />
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
    <>
      <Location
        opened={locationModalOpened}
        onClose={handleLocationModalClose}
      />
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
            <div className={styles.categoryWrapper}>{renderCategoryItems}</div>
          )}

          <div
            className={cn(styles.content, sidebarOpen && styles.contentVisible)}
          >
            {Boolean(prevSidebarState.current.length) && renderBackButton}
            {isDesktop || sidebarOpen ? renderOptions : null}
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
    </>
  );
});

Sidebar.displayName = "Sidebar";
export { Sidebar };
