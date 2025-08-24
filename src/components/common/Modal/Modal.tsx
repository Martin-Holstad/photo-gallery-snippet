import styles from "./Modal.module.css";
import { type MouseEvent, useRef } from "react";
import { useAppContext } from "../../../context/AppContext";

export default function Modal() {
  const { isModalOpen, setIsModalOpen, modalContent } = useAppContext();

  const modalRef = useRef<HTMLDivElement>(null);

  function closeModal(event: MouseEvent<HTMLDivElement>) {
    if (event.target === modalRef.current) {
      setIsModalOpen(false);
    }
  }

  return (
    isModalOpen && (
      <div className={styles.modal} ref={modalRef} onClick={closeModal}>
        {modalContent}
      </div>
    )
  );
}
