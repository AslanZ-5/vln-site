import React from "react";
import cn from "classnames";
import styles from "./category-button.module.scss";
import Link from "next/link";

function CategoryButton({
  title,
  onClick,
  active,
  src,
}: {
  title: string;
  onClick?: () => void;
  active?: boolean;
  src?: string;
}) {
  return (
    <button
      className={cn(styles.wrapper, active && styles.active)}
      onClick={onClick}
    >
      {src ? <Link href={src}>{title}</Link> : title}
    </button>
  );
}

export default React.memo(CategoryButton);
