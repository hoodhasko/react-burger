import { BASE_URL } from "../../config/constants";
import { IngredientResponse, OrderResponse } from "../../types/response";
import { checkReponse } from "../../utils/checkResponse";

export const ApiService = {
  async getData() {
    return fetch(`${BASE_URL}/ingredients`)
      .then(checkReponse)
      .then((data: IngredientResponse) => {
        return data.data;
      })
      .catch((err) => {
        throw err;
      });
  },

  async createOrder(idList: string[]) {
    return fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ingredients: idList }),
    })
      .then(checkReponse)
      .then((data: OrderResponse) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  },
};
