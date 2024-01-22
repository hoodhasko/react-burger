import { FC, PropsWithChildren } from "react";

import styles from "./modal-overlay.module.css";

interface ModalOverlayProps extends PropsWithChildren {
  onClose: () => void;
}

export const ModalOverlay: FC<ModalOverlayProps> = ({ onClose, children }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      {children}
    </div>
  );
};
