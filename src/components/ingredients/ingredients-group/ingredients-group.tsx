import { FC, useEffect, useRef } from "react";

import { BurgerIngredientCard } from "../ingredient-card/ingredient-card";
import { Ingredient } from "../../../types/Ingredient";

import styles from "./ingredients-group.module.css";

interface BurgerIngredientsGroupProps {
  groupName: string;
  groupData: Ingredient[];
  scroll: boolean;
  groupRef: HTMLDivElement | null;
  setCurrentTab: () => void;
}

export const BurgerIngredientsGroup: FC<BurgerIngredientsGroupProps> = ({
  groupName,
  groupData,
  scroll,
  groupRef,
  setCurrentTab,
}) => {
  const groupTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (groupRef) {
      const onScroll = () => {
        const groupRec = groupRef.getBoundingClientRect();
        const groupTitleRec = groupTitleRef.current?.getBoundingClientRect();

        if (!groupRec || !groupTitleRec) {
          return;
        }

        if (groupTitleRec.top < groupRec.top) {
          setCurrentTab();
        }
      };

      groupRef.addEventListener("scroll", onScroll);

      return () => groupRef.removeEventListener("scroll", onScroll);
    }
  }, [groupRef]);

  useEffect(() => {
    if (groupTitleRef.current && scroll) {
      groupTitleRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scroll]);

  return (
    <div className={`mb-10`}>
      <h3 ref={groupTitleRef} className={styles.groupTitle}>
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
