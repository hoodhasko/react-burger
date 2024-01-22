import { useEffect } from "react";

import { AppHeader } from "../app-header/app-header";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerIngredients } from "../ingredients/ingredients";
import { useFetchIngredients } from "../../hooks/useFetchIngredients";

import styles from "./app.module.css";

export const App = () => {
  const { getData, data, isError, isLoading } = useFetchIngredients();

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        {isLoading && <p className="text text_type_main-large">Загрузка...</p>}
        {isError && (
          <p className="text text_type_main-large"> Произошла ошибка</p>
        )}
        {data.length > 0 && (
          <>
            <BurgerIngredients data={data} />
            <BurgerConstructor data={data} />
          </>
        )}
      </div>
    </>
  );
};
