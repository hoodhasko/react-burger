import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { data } from "../../utils/data";
import { ConstructorTotal } from "../constructor-total/constructor-total";

import styles from "./burger-constructor.module.css";

export const BurgerConstructor = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ingredientsContainer}>
        <div className="pl-8 pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>

        <ul className={styles.ingredientsList}>
          {data
            .filter((ingredient) => ingredient.type !== "bun")
            .map((ingredient) => (
              <li key={ingredient._id} className={styles.ingredientsListItem}>
                <DragIcon type="primary" />
                <ConstructorElement
                  extraClass="ml-2"
                  text={ingredient.name}
                  price={50}
                  thumbnail={ingredient.image}
                />
              </li>
            ))}
        </ul>

        <div className="pl-8 pr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
          />
        </div>
      </div>

      <ConstructorTotal total={610} />
    </section>
  );
};
