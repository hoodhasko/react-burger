import { FC, PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import { ModalOverlay } from "./modal-overlay/modal-overlay";

import styles from "./modal.module.css";

interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title?: string;
}

export const Modal: FC<ModalProps> = ({ open, onClose, title, children }) => {
  const modalRoot = document.getElementById("react-modals") as HTMLElement;

  const escHandler = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escHandler);

    return () => {
      document.removeEventListener("keydown", escHandler);
    };
  }, []);

  if (!open || !modalRoot) {
    return null;
  }

  return createPortal(
    <ModalOverlay onClose={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button onClick={onClose} className={styles.modalCloseButton}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};
