import { FC, useMemo } from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";

import { Ingredient } from "../../../types/Ingredient";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { setCurrentIngredient } from "../../../services";

import styles from "./ingredient-card.module.css";

interface BurgerIngredientCardProps {
  ingredient: Ingredient;
}

export const BurgerIngredientCard: FC<BurgerIngredientCardProps> = ({
  ingredient,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ingredient",
    item: ingredient,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const { bun, items } = useAppSelector(
    (state) => state.burgerConstructor.constructorIngredients
  );
  const dispatch = useAppDispatch();

  const count = useMemo(() => {
    if (ingredient.type === "bun") {
      return ingredient._id === bun?._id ? 1 : 0;
    } else {
      return items.filter((item) => item._id === ingredient._id).length;
    }
  }, [ingredient, bun, items]);

  const ingredientClickHandler = () => {
    dispatch(setCurrentIngredient(ingredient));
  };

  return (
    <div
      ref={drag}
      className={styles.ingredientCard}
      onClick={ingredientClickHandler}
    >
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
