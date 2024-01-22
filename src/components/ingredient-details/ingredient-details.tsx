import { FC } from "react";

import { Ingredient } from "../../types/Ingredient";
import {
  INGREDIENT_PROPIERTIES,
  INGREDIENT_PROPIERTIES_TITLES,
} from "../../config/constants";

import styles from "./ingredient-details.module.css";

interface IngredientDetailsProps {
  ingredient: Ingredient;
}

export const IngredientDetails: FC<IngredientDetailsProps> = ({
  ingredient,
}) => {
  return (
    <div className={styles.container}>
      <img alt={ingredient.name} src={ingredient.image_large} />
      <p className="text text_type_main-medium pt-4">{ingredient.name}</p>

      <ul className={styles.propertiesList}>
        {INGREDIENT_PROPIERTIES.map((property) => (
          <li key={property} className={styles.propertiesListItem}>
            <p className="text text_type_main-default text_color_inactive">
              {INGREDIENT_PROPIERTIES_TITLES[property]}
            </p>
            <p className="text text_type_digits-default pt-2 text_color_inactive">
              {ingredient[property]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
