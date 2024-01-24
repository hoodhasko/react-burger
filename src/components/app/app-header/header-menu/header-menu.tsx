import { FC } from "react";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { MenuButton } from "../menu-button/menu-button";

import styles from "./header-menu.module.css";

export const HeaderMenu: FC = () => {
  return (
    <nav className={styles.nav}>
      <MenuButton
        icon={<BurgerIcon type="primary" />}
        text="Конструктор"
        active
      />
      <MenuButton icon={<ListIcon type="primary" />} text="Лента заказов" />
    </nav>
  );
};
