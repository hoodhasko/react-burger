import { FC } from "react";

import styles from "./modal-overlay.module.css";

interface ModalOverlayProps {
  onClose: () => void;
}

export const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
  return <div className={styles.overlay} onClick={onClose} />;
};
