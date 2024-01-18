import {
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { HeaderMenu } from "../header-menu/header-menu";
import { MenuButton } from "../menu-button/menu-button";

import styles from "./app-header.module.css";

export const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderMenu />
        <Logo />
        <MenuButton
          text="Личный кабинет"
          icon={<ProfileIcon type="secondary" />}
        />
      </div>
    </header>
  );
};
