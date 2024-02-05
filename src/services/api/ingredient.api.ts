import { BASE_URL } from "../../config/constants";
import { IngredientResponse } from "../../types/response";
import { checkReponse } from "../../utils/checkResponse";

export const IngredientService = {
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
};
