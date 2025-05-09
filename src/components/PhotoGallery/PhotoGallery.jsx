import styles from "./PhotoGallery.module.css";
import { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import getPhotos from "../../actions/getRequests/getPhotos";
import PhotoCard from "../common/Cards/PhotoCard";
import PhotoCardLoader from "../common/Cards/PhotoCardLoader";
import ModalImage from "../common/Modal/ModalImage";

export default function PhotoGallery() {
  const { setIsModalOpen, setModalContent } = useAppContext();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        setPhotos(Array.from({ length: 16 }, (_, index) => index));
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

  function handlePhotoClick(photo) {
    if (loading) return;
    setModalContent(<ModalImage photo={photo} height="" width="60%" />);
    setIsModalOpen(true);
  }

  return (
    <main className={styles.main}>
      <h1>Gallery</h1>
      <div className={styles.gallery}>
        {photos.map((photo, index) => (
          <div key={index} onClick={() => handlePhotoClick(photo)}>
            {loading ? <PhotoCardLoader /> : <PhotoCard photo={photo} />}
          </div>
        ))}
      </div>
    </main>
  );
}
