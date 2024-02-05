import { FC, useMemo } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Ingredient } from "../../../types/Ingredient";

import styles from "./ingredient-card.module.css";
import { useDrag } from "react-dnd";
import { useAppSelector } from "../../../hooks";

interface BurgerIngredientCardProps {
  ingredient: Ingredient;
  onClick: () => void;
}

export const BurgerIngredientCard: FC<BurgerIngredientCardProps> = ({
  ingredient,
  onClick,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const { bun, items } = useAppSelector(
    (state) => state.ingredient.constructorIngredients
  );

  const count = useMemo(() => {
    if (ingredient.type === "bun") {
      return ingredient._id === bun?._id ? 1 : 0;
    } else {
      return items.filter((item) => item._id === ingredient._id).length;
    }
  }, [ingredient, bun, items]);

  return (
    <div ref={drag} className={styles.ingredientCard} onClick={onClick}>
      {Boolean(count) && (
        <Counter count={count} size="default" extraClass="m-1" />
      )}

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
