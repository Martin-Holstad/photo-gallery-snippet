import styles from "./ModalImage.module.css";
import { type Photo } from "../../../types/Photo";

type TrailerProps = {
  photo: Photo;
  height: string;
  width: string;
};

export default function ModalImage({ photo, height, width }: TrailerProps) {
  return (
    <div className={styles.modalImage} style={{ height, width }}>
      <img src={photo.src} alt={photo.alt} />
    </div>
  );
}
