import { FC, useMemo, useState } from "react";

import { GroupNames, GroupTypes } from "../../utils/data";
import { BurgerIngredientsTabs } from "../ingredients-tabs/ingredients-tabs";
import { BurgerIngredientsGroup } from "../ingredients-group/ingredients-group";
import { Ingredient, IngredientType } from "../../types/Ingredient";

import styles from "./ingredients.module.css";

interface BurgerIngredientsProps {
  data: Ingredient[];
}

export const BurgerIngredients: FC<BurgerIngredientsProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState<IngredientType>(GroupTypes[0]);

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

  return (
    <section className={styles.container}>
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
          />
        ))}
      </div>
    </section>
  );
};
