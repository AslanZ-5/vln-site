import React from "react";
import cn from "classnames";
import styles from "./category-button.module.scss";

function CategoryButton({
  title,
  onClick,
  active,
}: {
  title: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      className={cn(styles.wrapper, active && styles.active)}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default React.memo(CategoryButton);
