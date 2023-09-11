import { Header } from "@/widgets/headeer";
import { ReactNode } from "react";
import styles from "./layout.module.css";
import { Slider } from "@/widgets/carousel/ui/slider";
import { Sidebar } from "@/widgets/sidebar";
import { Carousel } from "@mantine/carousel";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      {/* <Carousel /> */}
    </div>
  );
}
