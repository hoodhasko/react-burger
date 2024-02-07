import { useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { AppHeader } from "./app-header/app-header";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerIngredients } from "../ingredients/ingredients";
import { fetchIngredients } from "../../services/actions";
import { useAppDispatch, useAppSelector } from "../../hooks";

import styles from "./app.module.css";

export const App = () => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useAppSelector(
    (state) => state.ingredient
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        {ingredientsRequest && (
          <p className="text text_type_main-large">Загрузка...</p>
        )}
        {ingredientsFailed && (
          <p className="text text_type_main-large"> Произошла ошибка</p>
        )}
        {ingredients.length > 0 && (
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        )}

        <div id="react-modals"></div>
      </div>
    </>
  );
};
