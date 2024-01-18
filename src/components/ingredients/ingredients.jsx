import { useMemo, useState } from "react";

import { data } from "../../utils/data";
import { BurgerIngredientsTabs } from "../ingredients-tabs/ingredients-tabs";
import { BurgerIngredientsGroup } from "../ingredients-group/ingredients-group";

import styles from "./ingredients.module.css";

const groupTypes = ["bun", "sauce", "main"];
const groupNames = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};

export const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = useState(groupTypes[0]);

  const groupedData = useMemo(
    () =>
      data.reduce((acc, item) => {
        if (!acc[item.type]) {
          acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
      }, {}),
    [data]
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Соберите бургер</h1>

      <BurgerIngredientsTabs
        currentTab={currentTab}
        groupTypes={groupTypes}
        groupNames={groupNames}
        onTabClick={setCurrentTab}
      />
      <div className={styles.scrollBar}>
        {groupTypes.map((groupType) => (
          <BurgerIngredientsGroup
            key={groupType}
            groupData={groupedData[groupType]}
            groupName={groupNames[groupType]}
            scroll={currentTab === groupType}
          />
        ))}
      </div>
    </section>
  );
};
