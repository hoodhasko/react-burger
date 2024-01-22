import React, { FC } from "react";
import { TIconProps } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";

import styles from "./menu-button.module.css";

interface MenuButtonProps {
  icon: JSX.Element;
  text: string;
  active?: boolean;
}

export const MenuButton: FC<MenuButtonProps> = ({ icon, text, active }) => {
  return (
    <a className={styles.menuButton}>
      {React.cloneElement(icon as React.ReactElement<TIconProps>, {
        type: active ? "primary" : "secondary",
      })}
      <p
        className={active ? styles.menuButtonTextActive : styles.menuButtonText}
      >
        {text}
      </p>
    </a>
  );
};
