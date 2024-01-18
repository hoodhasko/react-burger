import { AppHeader } from "../app-header/app-header";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { BurgerIngredients } from "../ingredients/ingredients";

import styles from "./app.module.css";

export const App = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  );
};
