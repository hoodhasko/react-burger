import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-empty-element.module.css";
import { FC } from "react";

interface ConstructorEmptyElementProps {
  type?: "top" | "bottom";
}

export const ConstructorEmptyElement: FC<ConstructorEmptyElementProps> = ({
  type,
}) => {
  return (
    <ConstructorElement
      type={type}
      text=""
      price={0}
      thumbnail={""}
      extraClass={styles.ingredientsListItemEmpty}
    />
  );
};
