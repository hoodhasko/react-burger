import { FC, useEffect, useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import styles from "./constructor-total.module.css";
import { useFetchCreateOrder } from "../../../hooks/useFetchCreateOrder";

interface ConstructorTotalProps {
  total: number;
}

export const ConstructorTotal: FC<ConstructorTotalProps> = ({ total }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { getData, data, isError, isLoading } = useFetchCreateOrder([
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093c",
  ]);

  useEffect(() => {
    if (data) {
      setIsOpen(true);
    }
  }, [data]);

  return (
    <>
      {data && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <OrderDetails orderNumber={data.order.number} />
        </Modal>
      )}

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
          onClick={getData}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
};
