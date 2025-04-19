import styles from "./Favorites.module.css";
import { useState, useRef } from "react";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import ModalImage from "./ModalImage";
import PhotoCard from "../Cards/PhotoCard";

export default function Favorites({ favorites }) {
  const [photo, setPhoto] = useState(null);
  const photoRef = useRef(null);

  function handleClick() {
    setPhoto(null);
  }

  useOnClickOutside(photoRef, handleClick);

  return (
    <div className={styles.wrapper}>
      <h2>Favorites</h2>
      <div className={styles.favorites}>
        {favorites.length === 0 && <p className={styles.noFavirtesMessage}>Favorites is empty!</p>}
        {photo ? (
          <div ref={photoRef}>
            <ModalImage photo={photo} height="90%" width="95%" />
          </div>
        ) : (
          favorites.map((photo, index) => (
            <div key={index} onClick={() => setPhoto(photo)}>
              <PhotoCard photo={photo} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
