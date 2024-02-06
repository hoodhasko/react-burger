import { FC, useEffect, useState } from "react";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { Modal } from "../../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import { useFetchCreateOrder } from "../../../hooks/useFetchCreateOrder";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { createOrder } from "../../../services/actions";
import { resetConstructorItems } from "../../../services";

import styles from "./constructor-total.module.css";

interface ConstructorTotalProps {
  total: number;
}

export const ConstructorTotal: FC<ConstructorTotalProps> = ({ total }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    constructorIngredients: { bun, items },
    order,
  } = useAppSelector((state) => state.ingredient);

  const dispatch = useAppDispatch();

  const createOrderHandler = () => {
    if (bun) {
      dispatch(
        createOrder([bun._id, ...items.map((item) => item._id), bun._id])
      );
    }
  };

  const { getData, data, isError, isLoading } = useFetchCreateOrder([
    "643d69a5c3f7b9001cfa093c",
    "643d69a5c3f7b9001cfa0941",
    "643d69a5c3f7b9001cfa093c",
  ]);

  useEffect(() => {
    if (order) {
      dispatch(resetConstructorItems());
      setIsOpen(true);
    }
  }, [order]);

  return (
    <>
      {order && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <OrderDetails orderNumber={order.order.number} />
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
          onClick={createOrderHandler}
        >
          Оформить заказ
        </Button>
      </div>
    </>
  );
};
