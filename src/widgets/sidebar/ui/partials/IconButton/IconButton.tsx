import React from "react";
import styles from "./IconButton.module.css";
import cn from "classnames";
import { SideBarOption } from "../constants";
import { ArrowRight } from "@/shared/assets/svg";

interface IconBtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
  visibleChildren: boolean;
  Icon: null | (() => JSX.Element);
  classname?: string;
  nestedOptions?: SideBarOption[] | null;
}

function IconButton({
  children,
  onClick,
  visibleChildren,
  Icon,
  classname,
  nestedOptions,
}: IconBtnProps) {
  return (
    <div onClick={onClick} className={cn(styles.wrapper, classname)}>
      <div className={styles.iconWrapper}>{Icon !== null && <Icon />}</div>
      <span
        className={cn(
          styles.hiddenContent,
          visibleChildren && styles.visibalityContent,
          nestedOptions && styles.withArrow
        )}
      >
        {children} {nestedOptions && <ArrowRight />}
      </span>
    </div>
  );
}

export default React.memo(IconButton);
