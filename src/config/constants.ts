import { Ingredient } from "../types/Ingredient";

export const BASE_URL = "https://norma.nomoreparties.space/api";

export const INGREDIENT_PROPIERTIES: Array<keyof Partial<Ingredient>> = [
  "calories",
  "proteins",
  "fat",
  "carbohydrates",
];

export const INGREDIENT_PROPIERTIES_TITLES: {
  [k in keyof Partial<Ingredient>]: string;
} = {
  calories: "Калории,ккал",
  proteins: "Белки, г",
  fat: "Жиры, г",
  carbohydrates: "Углеводы, г",
};
