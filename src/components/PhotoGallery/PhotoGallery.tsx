import styles from "./PhotoGallery.module.css";
import { useEffect, useState } from "react";
import { type Photo } from "../../types/Photo";
import { useAppContext } from "../../context/AppContext";
import getPhotos from "../../actions/getRequests/getPhotos";
import PhotoCard from "../common/Cards/PhotoCard";
import PhotoCardLoader from "../common/Cards/PhotoCardLoader";
import ModalImage from "../common/Modal/ModalImage";

export default function PhotoGallery() {
  const { setIsModalOpen, setModalContent } = useAppContext();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        setPhotos(Array.from({ length: 16 }, (_, index) => ({ id: index, favorite: false, src: "", alt: "" })));
        const results = await getPhotos();
        setPhotos(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  function handlePhotoClick(photo: Photo) {
    if (loading) return;
    setModalContent(<ModalImage photo={photo} height="auto" width="60%" />);
    setIsModalOpen(true);
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Gallery</h1>
        {photos.length === 0 && <p className={styles.emptyMessage}>Gallery is empty!</p>}
        <div className={styles.gallery}>
          {photos.map((photo, index) => (
            <div key={index} onClick={() => handlePhotoClick(photo)}>
              {loading ? <PhotoCardLoader /> : <PhotoCard photo={photo} />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
