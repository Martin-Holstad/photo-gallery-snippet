import styles from "./Modal.module.css";
import { useRef } from "react";
import { useAppContext } from "../../../context/AppContext";

export default function Modal() {
  const { isModalOpen, setIsModalOpen, modalContent } = useAppContext();

  const modalRef = useRef();

  function closeModal(event) {
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
