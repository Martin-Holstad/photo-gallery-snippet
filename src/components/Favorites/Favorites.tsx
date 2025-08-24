import styles from "./Favorites.module.css";
import { useEffect, useState } from "react";
import { type Favorite } from "../../types/Favorite";
import { useAppContext } from "../../context/AppContext";
import getFavorites from "../../actions/getRequests/getFavorites";
import PhotoCard from "../common/Cards/PhotoCard";
import PhotoCardLoader from "../common/Cards/PhotoCardLoader";
import ModalImage from "../common/Modal/ModalImage";

export default function Favorites() {
  const { favorites, setIsModalOpen, setModalContent } = useAppContext();
  const [favorite, setFavorite] = useState<Favorite[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        setFavorite(Array.from({ length: 16 }, (_, index) => ({ id: index, favorite: false, src: "", alt: "" })));
        const results = await getFavorites();
        setFavorite(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, [favorites]);

  function handlePhotoClick(photo: Favorite) {
    if (loading) return;
    setModalContent(<ModalImage photo={photo} height="auto" width="60%" />);
    setIsModalOpen(true);
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Favorites</h1>
        {favorite.length === 0 && <p className={styles.emptyMessage}>Favorites is empty!</p>}
        <div className={styles.favorites}>
          {favorite.map((favorit, index) => (
            <div key={index} onClick={() => handlePhotoClick(favorit)}>
              {loading ? <PhotoCardLoader /> : <PhotoCard photo={favorit} />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
