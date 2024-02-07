import { FC } from "react";
import { CheckSVG } from "../../../assets/svg/check-svg";
import { DoneBackgroundSVG } from "../../../assets/svg/done-background-svg";

import styles from "./order-details.module.css";

interface OrderDetailsProps {
  orderNumber: number;
}

export const OrderDetails: FC<OrderDetailsProps> = ({ orderNumber }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.orderNumber}>{orderNumber}</h2>

      <p className="text text_type_main-medium mt-8">идентификатор заказа</p>

      <div className={styles.doneContainer}>
        <div className={styles.checkIconContainer}>
          <CheckSVG />
        </div>
        <DoneBackgroundSVG />
      </div>

      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};
