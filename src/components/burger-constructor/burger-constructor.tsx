import { FC, useMemo } from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrop } from "react-dnd";

import { ConstructorTotal } from "./constructor-total/constructor-total";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  deleteConstructorIngredient,
  setConstructorIngredients,
} from "../../services";
import { Ingredient } from "../../types/Ingredient";
import { ConstructorEmptyElement } from "./constructor-empty-element/constructor-empty-element";
import { ConstructorItem } from "./constructor-item/constructor-item";

import styles from "./burger-constructor.module.css";

interface BurgerConstructorProps {}

export const BurgerConstructor: FC<BurgerConstructorProps> = ({}) => {
  const constructorIngredients = useAppSelector(
    (state) => state.ingredient.constructorIngredients
  );
  const dispatch = useAppDispatch();

  const [_, drop] = useDrop<Ingredient>({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      dispatch(setConstructorIngredients(item));
    },
  });

  const deleteIngredientHandler = (id: string) => {
    dispatch(deleteConstructorIngredient({ id }));
  };

  const totalPrice = useMemo(() => {
    const ingredientsPrice = constructorIngredients.items.reduce(
      (acc, curr) => {
        return acc + curr.price;
      },
      0
    );
    const bunsPrice = (constructorIngredients.bun?.price ?? 0) * 2;

    return ingredientsPrice + bunsPrice;
  }, [constructorIngredients]);

  return (
    <section ref={drop} className={styles.container}>
      <div className={styles.ingredientsContainer}>
        <div className="pl-8 pr-4">
          {constructorIngredients.bun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${constructorIngredients.bun.name} (низ)`}
              price={constructorIngredients.bun.price}
              thumbnail={constructorIngredients.bun.image}
            />
          ) : (
            <ConstructorEmptyElement type="top" />
          )}
        </div>

        {constructorIngredients.items.length > 0 ? (
          <ul className={styles.ingredientsList}>
            {constructorIngredients.items.map((ingredient, index) => (
              <ConstructorItem
                key={ingredient.id}
                ingredient={ingredient}
                index={index}
                onDelete={deleteIngredientHandler}
              />
            ))}
          </ul>
        ) : (
          <div className="pl-4">
            <ConstructorEmptyElement />
          </div>
        )}

        <div className="pl-8 pr-4">
          {constructorIngredients.bun ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${constructorIngredients.bun.name} (низ)`}
              price={constructorIngredients.bun.price}
              thumbnail={constructorIngredients.bun.image}
            />
          ) : (
            <ConstructorEmptyElement type="bottom" />
          )}
        </div>
      </div>

      <ConstructorTotal total={totalPrice} />
    </section>
  );
};
