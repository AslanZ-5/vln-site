import React from "react";
import cn from "classnames";
import { Burger } from "@mantine/core";
import { BackArrow, LogoIcon, Pin_2 } from "@/shared/assets/svg";
import IconButton from "./partials/icon-button/icon-button";
import CategoryBtn from "./partials/category-btn/category-button";
import { categoryBtn } from "./partials/constants";
import { useSidebar } from "./use-sidebar";
import styles from "./sidebar.module.scss";

const Sidebar = React.memo(() => {
  const {
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

  const renderedOptions = sidebarOptions.map((el, ind) => {
    return (
      <IconButton
        onClick={handleGoInto(el.Title, el.childrens)}
        nestedOptions={el.childrens}
        classname={styles.hoverIcon}
        key={ind}
        visibleChildren={sidebarOpen}
        Icon={el.Icon && (() => <el.Icon />)}
      >
        {el.Title}
      </IconButton>
    );
  });

  const renderedCategoryBtns = categoryBtn.map((el, ind) => (
    <CategoryBtn
      onClick={handleChangeCategory(ind)}
      key={ind}
      active={ind === activeCategory}
      title={el}
    />
  ));

  return (
    <div
      onClick={handleCloseSideBar}
      className={cn(styles.wrapper, sidebarOpen && styles.openBackground)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(sidebarOpen && styles.opened)}
      >
        <div className={styles.controllBlock}>
          <IconButton
            visibleChildren={sidebarOpen}
            onClick={handleToggleSidebar}
            Icon={() => <Burger opened={sidebarOpen} />}
          >
            <LogoIcon />
          </IconButton>
        </div>
        {isFullSidebar && (
          <div className={styles.categoryWrapper}>{renderedCategoryBtns}</div>
        )}

        <div
          className={cn(styles.content, sidebarOpen && styles.contentVisible)}
        >
          {Boolean(prevSidebarState.current.length) && (
            <IconButton
              onClick={handleBackPrevState}
              classname={styles.hoverIcon}
              visibleChildren={sidebarOpen}
              Icon={() => <BackArrow />}
            >
              {prevSidebarState.current.at(-1)!.name}
            </IconButton>
          )}
          {renderedOptions}
        </div>

        {isFullSidebar && (
          <div className={styles.footer}>
            <IconButton
              classname={styles.hoverIcon}
              visibleChildren={sidebarOpen}
              Icon={() => <Pin_2 />}
            >
              {"Симферополь"}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";
export { Sidebar };
