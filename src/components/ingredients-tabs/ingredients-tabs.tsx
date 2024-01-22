import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./ingredients-tabs.module.css";
import { IngredientType } from "../../types/Ingredient";

interface BurgerIngredientsTabsProps {
  currentTab: string;
  groupTypes: IngredientType[];
  groupNames: { [key in IngredientType]: string };
  onTabClick: Dispatch<SetStateAction<IngredientType>>;
}

export const BurgerIngredientsTabs: FC<BurgerIngredientsTabsProps> = ({
  currentTab,
  groupTypes,
  groupNames,
  onTabClick,
}) => {
  return (
    <div className={styles.tabsContainer}>
      {groupTypes.map((groupType) => (
        <Tab
          key={groupType}
          value="bun"
          active={currentTab === groupType}
          onClick={() => onTabClick(groupType)}
        >
          {groupNames[groupType]}
        </Tab>
      ))}
    </div>
  );
};
