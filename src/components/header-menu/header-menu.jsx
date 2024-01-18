import { MenuButton } from "../menu-button/menu-button";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./header-menu.module.css";

export const HeaderMenu = () => {
  return (
    <nav className={styles.nav}>
      <MenuButton icon={<BurgerIcon />} text="Конструктор" active />
      <MenuButton icon={<ListIcon />} text="Лента заказов" />
    </nav>
  );
};
