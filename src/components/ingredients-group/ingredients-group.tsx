import { FC, useEffect, useRef } from "react";

import { BurgerIngredientCard } from "../ingredient-card/ingredient-card";
import { Ingredient } from "../../types/Ingredient";

import styles from "./ingredients-group.module.css";

interface BurgerIngredientsGroupProps {
  groupName: string;
  groupData: Ingredient[];
  scroll: boolean;
  onClick: (ingredient: Ingredient) => void;
}

export const BurgerIngredientsGroup: FC<BurgerIngredientsGroupProps> = ({
  groupName,
  groupData,
  scroll,
  onClick,
}) => {
  const groupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (groupRef.current && scroll) {
      groupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);

  return (
    <div className={`mb-10`} ref={groupRef}>
      <h3 className={styles.groupTitle}>{groupName}</h3>

      <div className={styles.cardsContainer}>
        {groupData.map((ingredient) => (
          <BurgerIngredientCard
            key={ingredient._id}
            ingredient={ingredient}
            onClick={() => onClick(ingredient)}
          />
        ))}
      </div>
    </div>
  );
};
