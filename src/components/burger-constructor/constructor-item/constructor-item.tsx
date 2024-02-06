import { FC, useCallback, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  IConstructorItem,
  sortConstructorIngredients,
} from "../../../services";
import { useAppDispatch } from "../../../hooks";

import styles from "./constructor-item.module.css";

interface ConstructorItemProps {
  ingredient: IConstructorItem;
  index: number;
  onDelete: (id: string) => void;
}

export const ConstructorItem: FC<ConstructorItemProps> = ({
  ingredient,
  index,
  onDelete,
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useAppDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "constructorIngredient",
    item: ingredient,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const moveItem = useCallback((dragId: string, hoverIndex: number) => {
    dispatch(
      sortConstructorIngredients({
        id: dragId,
        toIndex: hoverIndex,
      })
    );
  }, []);

  const [, drop] = useDrop<IConstructorItem>({
    accept: "constructorIngredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover({ id: draggedId }) {
      if (draggedId !== ingredient.id) {
        moveItem(draggedId, index);
      }
    },
  });

  drag(drop(ref));

  return (
    <li
      ref={ref}
      className={styles.ingredientsListItem}
      style={{ opacity: isDragging ? 0 : 1 }}
    >
      <p style={{ color: "white" }}>{index}</p>
      <DragIcon type="primary" />
      <ConstructorElement
        extraClass="ml-2"
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => onDelete(ingredient.id)}
      />
    </li>
  );
};
