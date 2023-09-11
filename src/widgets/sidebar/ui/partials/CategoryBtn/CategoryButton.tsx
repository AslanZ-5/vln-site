import React from "react";
import styles from "./CategoryButton.module.css";
import cn from "classnames";
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
