import { Tabs } from "@mantine/core";
import { ArrowRight } from "@/shared/assets/svg";
import { useRouter } from 'next/router';
import styles from "./styles.module.scss";

export function NewsHeader() {
  const router = useRouter();

  const handleClick: React.MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/news');
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.titleBtn} onClick={handleClick}>
        Новости и акции
        <div className={styles.arrowStyles}>
          <ArrowRight />
        </div>
      </button>

      <Tabs radius="md" variant="pills" defaultValue={"1"}>
        <Tabs.List>
          <Tabs.Tab value="1">Новости</Tabs.Tab>
          <Tabs.Tab value="2">Акции</Tabs.Tab>
          <Tabs.Tab value="3">Связь</Tabs.Tab>
          <Tabs.Tab value="4">Интернет</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  );
}
