import React from "react";

import styles from "./menu-button.module.css";

export const MenuButton = ({ icon, text, active }) => {
  return (
    <a className={styles.menuButton}>
      {React.cloneElement(icon, {
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
