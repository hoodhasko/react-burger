import { useState } from "react";

import { Ingredient } from "../types/Ingredient";
import { IngredientResponse } from "../types/response";
import { BASE_URL } from "../config/constants";
import { checkReponse } from "../utils/checkResponse";

export function useFetchIngredients() {
  const [data, setData] = useState<Ingredient[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = () => {
    setIsLoading(true);
    setIsError(false);

    fetch(`${BASE_URL}/ingredients`)
      .then(checkReponse)
      .then((data: IngredientResponse) => {
        setData(data.data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { getData, isLoading, isError, data };
}
