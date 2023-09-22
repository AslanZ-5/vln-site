import { useCallback, useEffect, useRef, useState } from "react";
import { SideBarOption, sideBarBtns } from "./partials/constants";

interface PrevOptions {
  name: string;
  options: SideBarOption[];
}

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const [sidebarOptions, setSidebarOptions] = useState(sideBarBtns);
  const prevSidebarState = useRef<PrevOptions[]>([]);

  const handleChangeCategory = useCallback(
    (ind: number) => () => {
      setActiveCategory(ind);
    },
    []
  );

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((val) => !val);
  }, []);

  const handleCloseSideBar = useCallback((e: React.SyntheticEvent) => {
    e.stopPropagation();
    setSidebarOpen(false);
  }, []);

  const handleCloseByKeyboard = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSidebarOpen(false);
    }
  }, []);

  const handleGoInto = useCallback(
    (name: string, childrens: SideBarOption[] | null) => () => {
      if (!childrens) return;

      prevSidebarState.current.push({ name, options: sidebarOptions });
      setSidebarOptions(childrens);
    },
    [prevSidebarState.current, sidebarOptions]
  );

  const handleBackPrevState = useCallback(() => {
    if (!prevSidebarState.current.length) return;

    setSidebarOptions(prevSidebarState.current.at(-1)!.options);
    prevSidebarState.current.splice(-1);
  }, [prevSidebarState.current]);

  useEffect(() => {
    window.addEventListener("keydown", handleCloseByKeyboard);

    return () => {
      window.removeEventListener("keydown", handleCloseByKeyboard);
    };
  }, []);

  useEffect(() => {
    if (!sidebarOpen && prevSidebarState.current) {
      setSidebarOptions(sideBarBtns);
      prevSidebarState.current = [];
    }
  }, [sidebarOpen, prevSidebarState.current]);

  return {
    sidebarOpen,
    activeCategory,
    prevSidebarState,
    sidebarOptions,
    isFullSidebar: sidebarOpen && !prevSidebarState.current.length,
    handleCloseSideBar,
    handleToggleSidebar,
    handleChangeCategory,
    handleBackPrevState,
    handleGoInto,
  };
};
