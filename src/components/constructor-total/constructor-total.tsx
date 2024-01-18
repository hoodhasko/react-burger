import { FC } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./constructor-total.module.css";

interface ConstructorTotalProps {
  total: number;
}

export const ConstructorTotal: FC<ConstructorTotalProps> = ({ total }) => {
  return (
    <div className={styles.container}>
      <div className={styles.totalPriceContainer}>
        <p className="text text_type_digits-medium mr-2">{total}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        extraClass={styles.button}
      >
        Оформить заказ
      </Button>
    </div>
  );
};
