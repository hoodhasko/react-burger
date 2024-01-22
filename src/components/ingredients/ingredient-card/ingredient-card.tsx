import { FC } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Ingredient } from "../../../types/Ingredient";

import styles from "./ingredient-card.module.css";

interface BurgerIngredientCardProps {
  ingredient: Ingredient;
  onClick: () => void;
}

export const BurgerIngredientCard: FC<BurgerIngredientCardProps> = ({
  ingredient,
  onClick,
}) => {
  return (
    <div className={styles.ingredientCard} onClick={onClick}>
      <Counter count={1} size="default" extraClass="m-1" />

      <img
        src={ingredient.image}
        alt={ingredient.name}
        className={styles.cardImage}
      />
      <div className={styles.priceContainer}>
        <p className={styles.price}>{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.ingredientName}>{ingredient.name}</p>
    </div>
  );
};
