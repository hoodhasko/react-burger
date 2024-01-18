import { AppHeader } from "../app-header/app-header";
import { BurgerIngredients } from "../ingredients/ingredients";

import styles from "./app.module.css";

export const App = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.container}>
        <BurgerIngredients />
      </div>
    </>
  );
};
