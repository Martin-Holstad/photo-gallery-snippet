import styles from "./FavoriteButton.module.css";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import getFavorites from "../../../actions/getRequests/getFavorites";
import Favorites from "../Modal/Favorites";
import Icons from "../Icons/Icons";

export default function FavoriteButton() {
  const { isModalOpen, setIsModalOpen, setModalContent, favorites, setFavorites } = useAppContext();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true);
        const results = await getFavorites();
        setFavorites(results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  function handleClick() {
    setModalContent(<Favorites favorites={favorites} />);
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    if (isModalOpen) setModalContent(<Favorites favorites={favorites} />);
  }, [favorites]);

  return (
    <div className={styles.favoritButtonWrapper} onClick={() => handleClick()}>
      {favorites.length > 0 && !loading ? <p className={styles.favoritesCounter}>{favorites.length}</p> : ""}
      <div className={styles.favoriteButton}>
        <Icons icon="faHeart" color="#ffff" size="25px" />
      </div>
    </div>
  );
}
