import { FC, useMemo, useState } from "react";

import { GroupNames, GroupTypes } from "../../utils/data";
import { BurgerIngredientsTabs } from "./ingredients-tabs/ingredients-tabs";
import { BurgerIngredientsGroup } from "./ingredients-group/ingredients-group";
import { IngredientDetails } from "./ingredient-details/ingredient-details";
import { Ingredient, IngredientType } from "../../types/Ingredient";
import { Modal } from "../modal/modal";

import styles from "./ingredients.module.css";

interface BurgerIngredientsProps {
  data: Ingredient[];
}

export const BurgerIngredients: FC<BurgerIngredientsProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState<IngredientType>(GroupTypes[0]);
  const [selectedingredient, setSelectedIngredient] =
    useState<Ingredient | null>(null);

  const groupedData = useMemo(
    () =>
      data.reduce<{ [key in IngredientType]: Ingredient[] }>((acc, item) => {
        if (!acc[item.type]) {
          acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
      }, {} as { [key in IngredientType]: Ingredient[] }),
    [data]
  );

  const ingredientClickHandler = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
  };

  return (
    <section className={styles.container}>
      <Modal
        open={!!selectedingredient}
        onClose={() => setSelectedIngredient(null)}
        title="Детали ингредиента"
      >
        {selectedingredient && (
          <IngredientDetails ingredient={selectedingredient} />
        )}
      </Modal>
      <h1 className={styles.title}>Соберите бургер</h1>

      <BurgerIngredientsTabs
        currentTab={currentTab}
        groupTypes={GroupTypes}
        groupNames={GroupNames}
        onTabClick={setCurrentTab}
      />
      <div className={styles.scrollBar}>
        {GroupTypes.map((groupType) => (
          <BurgerIngredientsGroup
            key={groupType}
            groupData={groupedData[groupType]}
            groupName={GroupNames[groupType]}
            scroll={currentTab === groupType}
            onClick={ingredientClickHandler}
          />
        ))}
      </div>
    </section>
  );
};
