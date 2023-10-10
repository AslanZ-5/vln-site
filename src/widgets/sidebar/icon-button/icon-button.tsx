import React from "react";
import cn from "classnames";
import { SideBarOption } from "../constants";
import { ArrowRight } from "@/shared/assets/svg";
import styles from "./icon-button.module.scss";

interface IconBtnProps {
  children?: React.ReactNode;
  onClick?: () => void;
  visibleChildren?: boolean;
  Icon: null | (({ className }: { className?: string }) => JSX.Element);
  classname?: string;
  nestedOptions?: SideBarOption[] | null;
  active?: boolean;
  innerLabel?: string;
  showActiveLine?: boolean;
}

function IconButton({
  children,
  onClick,
  visibleChildren,
  Icon,
  classname,
  nestedOptions,
  active,
  showActiveLine,
  innerLabel,
}: IconBtnProps) {
  return (
    <div onClick={onClick} className={cn(styles.wrapper, classname)}>
      <div
        className={cn(
          styles.iconWrapper,
          active && showActiveLine && styles.active
        )}
      >
        {Icon !== null && (
          <Icon className={cn(active && styles.iconActiveColor)} />
        )}
        <div
          className={cn(styles.innerLabel, active && styles.innerLabelActive)}
        >
          {innerLabel}
        </div>
      </div>
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
