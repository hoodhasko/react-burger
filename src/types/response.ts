import { Ingredient } from "./Ingredient";

export interface IngredientResponse {
  success: boolean;
  data: Ingredient[];
}
