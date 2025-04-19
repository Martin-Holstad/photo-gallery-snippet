import styles from "./ModalImage.module.css";

export default function ModalImage({ photo, height, width, cursor }) {
  return (
    <div className={styles.modalImage} style={{ height, width, cursor }}>
      <img src={photo.src} alt={photo.alt} />
    </div>
  );
}
