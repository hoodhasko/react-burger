import { FC, useMemo, useRef, useState } from "react";

import { GroupNames, GroupTypes } from "../../utils/data";
import { BurgerIngredientsTabs } from "./ingredients-tabs/ingredients-tabs";
import { BurgerIngredientsGroup } from "./ingredients-group/ingredients-group";
import { IngredientDetails } from "./ingredient-details/ingredient-details";
import { Ingredient, IngredientType } from "../../types/Ingredient";
import { Modal } from "../modal/modal";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCurrentIngredient } from "../../services";

import styles from "./ingredients.module.css";

interface BurgerIngredientsProps {}

export const BurgerIngredients: FC<BurgerIngredientsProps> = ({}) => {
  const [currentTab, setCurrentTab] = useState<IngredientType>(GroupTypes[0]);
  const groupRef = useRef<HTMLDivElement>(null);

  const { ingredients, currentIngredient } = useAppSelector(
    (state) => state.ingredient
  );

  const dispatch = useAppDispatch();

  const groupedData = useMemo(
    () =>
      ingredients.reduce<{ [key in IngredientType]: Ingredient[] }>(
        (acc, item) => {
          if (!acc[item.type]) {
            acc[item.type] = [];
          }
          acc[item.type].push(item);
          return acc;
        },
        {} as { [key in IngredientType]: Ingredient[] }
      ),
    [ingredients]
  );

  return (
    <section className={styles.container}>
      {currentIngredient && (
        <Modal
          onClose={() => dispatch(setCurrentIngredient(null))}
          title="Детали ингредиента"
        >
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
      <h1 className={styles.title}>Соберите бургер</h1>
      <BurgerIngredientsTabs
        currentTab={currentTab}
        groupTypes={GroupTypes}
        groupNames={GroupNames}
        onTabClick={setCurrentTab}
      />
      <div ref={groupRef} className={styles.scrollBar}>
        {GroupTypes.map((groupType) => (
          <BurgerIngredientsGroup
            key={groupType}
            groupRef={groupRef.current}
            groupData={groupedData[groupType]}
            groupName={GroupNames[groupType]}
            scroll={currentTab === groupType}
            setCurrentTab={() => setCurrentTab(groupType)}
          />
        ))}
      </div>
    </section>
  );
};
