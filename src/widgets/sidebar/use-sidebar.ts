import { useCallback, useEffect, useRef, useState } from "react";
import { SideBarOption, sidebarItems } from "./constants";

interface PrevOptions {
  name: string;
  options: SideBarOption[];
}

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const [sidebarOptions, setSidebarOptions] = useState(sidebarItems);
  const prevSidebarState = useRef<PrevOptions[]>([]);
  const [activeItem, setActibeItem] = useState<null | number>(null);

  const handleChangeCategory = useCallback(
    (ind: number) => () => {
      setActiveCategory(ind);
    },
    []
  );

  const handleToggleSidebar = useCallback(() => {
    setSidebarOpen((val) => !val);
  }, []);

  const handleCloseSideBar = useCallback((e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    setSidebarOpen(false);
  }, []);

  const handleCloseByKeyboard = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setSidebarOpen(false);
    }
  }, []);

  const handleGoInto = useCallback(
    (name: string, children: SideBarOption[] | null, id: number) => () => {
      if (children) {
        prevSidebarState.current.push({ name, options: sidebarOptions });
        setSidebarOptions(children);
      }
      setActibeItem(id);
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
      setSidebarOptions(sidebarItems);
      prevSidebarState.current = [];
    }
  }, [sidebarOpen, prevSidebarState.current]);

  return {
    sidebarOpen,
    activeItem,
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
