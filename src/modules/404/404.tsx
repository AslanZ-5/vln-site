import { Button, TextInput } from "@mantine/core";
import styles from "./404.module.scss";
import Image from "next/image";
import { ArrowLeft, SearchIcon } from "@/shared/assets/svg";
import { Breadcrumbs } from "@/shared/ui-kit";

const breadCrumbsItems = [
  { title: "Главная", href: "/" },
  { title: "404", href: "/404" },
];

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <Breadcrumbs list={breadCrumbsItems} />
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <div className={styles.lContent}>
            <div className={styles.title}>Страница не найдена</div>
            <div className={styles.text}>
              Возможно, вы указали неправильный адрес или страница, на которую
              вы хотели зайти, устарела и была удалена.
            </div>
            <div className={styles.form}>
              <Button
                classNames={{ root: styles.button, inner: styles.buttonInner }}
                size="md"
                leftIcon={<ArrowLeft />}
              >
                Назад
              </Button>
              <TextInput
                classNames={{ input: styles.input, root: styles.inputWrapper }}
                size="md"
                placeholder="Что вы хотите найти?"
                icon={<SearchIcon />}
              />
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <Image
            className={styles.mainImage}
            src="/assets/img/404.png"
            alt="Not found"
            width={550}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
