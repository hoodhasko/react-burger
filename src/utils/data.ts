import { IngredientType } from "../types/Ingredient";

export const GroupTypes: IngredientType[] = ["bun", "sauce", "main"];
export const GroupNames: { [key in IngredientType]: string } = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};
