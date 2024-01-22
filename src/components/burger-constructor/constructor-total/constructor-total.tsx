import { FC, useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import styles from "./constructor-total.module.css";

interface ConstructorTotalProps {
  total: number;
}

export const ConstructorTotal: FC<ConstructorTotalProps> = ({ total }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <OrderDetails />
      </Modal>

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
          onClick={() => setIsOpen(true)}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
};
