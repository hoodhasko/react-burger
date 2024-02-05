import { useState } from "react";

import { OrderResponse } from "../types/response";
import { BASE_URL } from "../config/constants";
import { checkReponse } from "../utils/checkResponse";

export function useFetchCreateOrder(ingredients: string[]) {
  const [data, setData] = useState<OrderResponse>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = () => {
    setIsLoading(true);
    setIsError(false);

    fetch(`${BASE_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ ingredients }),
    })
      .then(checkReponse)
      .then((data: OrderResponse) => {
        setData(data);
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
