import { Ingredient } from "./Ingredient";

export interface IngredientResponse {
  success: boolean;
  data: Ingredient[];
}

export interface OrderResponse {
  name: string;
  order: {
    number: number;
  };
  success: boolean;
}
