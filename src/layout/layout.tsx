import { Header } from "@/widgets/headeer";
import { ReactNode } from "react";
import { Sidebar } from "@/widgets/sidebar";

import styles from "./layout.module.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
