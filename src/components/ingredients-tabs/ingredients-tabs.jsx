import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./ingredients-tabs.module.css";

export const BurgerIngredientsTabs = ({
  currentTab,
  groupTypes,
  groupNames,
  onTabClick,
}) => {
  return (
    <div className={styles.tabsContainer}>
      {groupTypes.map((groupType) => (
        <Tab
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
