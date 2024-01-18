import { useEffect, useRef } from "react";

import { BurgerIngredientCard } from "../ingredient-card/ingredient-card";

import styles from "./ingredients-group.module.css";

export const BurgerIngredientsGroup = ({ groupName, groupData, scroll }) => {
  const groupRef = useRef(null);

  useEffect(() => {
    if (groupRef.current && scroll) {
      groupRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);

  return (
    <div className={`mb-10`} ref={groupRef}>
      <h3 ref={groupRef} className={styles.groupTitle}>
        {groupName}
      </h3>

      <div className={styles.cardsContainer}>
        {groupData.map((ingredient) => (
          <BurgerIngredientCard key={ingredient._id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};
