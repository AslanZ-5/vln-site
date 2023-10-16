import { useCallback, useEffect, useRef, useState } from 'react';
import { SideBarOption, sidebarItems } from './constants';

interface PrevOptions {
  name: string;
  options: SideBarOption[];
}

interface UseSidebarProps {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
}

export const useSidebar = ({ isOpen, onOpen, onClose }: UseSidebarProps) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const [sidebarOptions, setSidebarOptions] = useState(sidebarItems);
  const prevSidebarState = useRef<PrevOptions[]>([]);
  const [activeItem, setActibeItem] = useState<null | number>(null);

  const handleChangeCategory = useCallback(
    (ind: number) => () => {
      setActiveCategory(ind);
    },
    [],
  );

  const handleOpenSideBar = useCallback(() => {
    onOpen();
  }, [isOpen]);

  const handleCloseSideBar = useCallback(
    (e?: React.SyntheticEvent) => {
      e?.stopPropagation();
      onClose();
    },
    [isOpen],
  );

  const handleCloseByKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [isOpen],
  );

  const handleGoInto = useCallback(
    (name: string, children: SideBarOption[] | null, id: number) => () => {
      if (children) {
        prevSidebarState.current.push({ name, options: sidebarOptions });
        setSidebarOptions(children);
      }
      setActibeItem(id);
    },
    [prevSidebarState.current, sidebarOptions],
  );

  const handleBackPrevState = useCallback(() => {
    if (!prevSidebarState.current.length) return;

    setSidebarOptions(prevSidebarState.current.at(-1)!.options);
    prevSidebarState.current.splice(-1);
  }, [prevSidebarState.current]);

  useEffect(() => {
    window.addEventListener('keydown', handleCloseByKeyboard);

    return () => {
      window.removeEventListener('keydown', handleCloseByKeyboard);
    };
  }, []);

  useEffect(() => {
    if (!isOpen && prevSidebarState.current) {
      setSidebarOptions(sidebarItems);
      prevSidebarState.current = [];
    }
  }, [isOpen, prevSidebarState.current]);

  return {
    activeItem,
    activeCategory,
    prevSidebarState,
    sidebarOptions,
    isFullSidebar: isOpen && !prevSidebarState.current.length,
    handleCloseSideBar,
    handleOpenSideBar,
    handleChangeCategory,
    handleBackPrevState,
    handleGoInto,
  };
};
