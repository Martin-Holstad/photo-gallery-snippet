import styles from "./FavoriteButton.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../../context/AppContext";
import getFavorites from "../../../actions/getRequests/getFavorites";
import Icons from "../Icons/Icons";

export default function FavoriteButton() {
  const { favorites, setFavorites } = useAppContext();

  useEffect(() => {
    async function fetch() {
      const results = await getFavorites();
      setFavorites(results);
    }
    fetch();
  }, []);

  return (
    <div className={styles.favoritButtonWrapper}>
      {favorites.length > 0 && <p className={styles.favoritesCounter}>{favorites.length}</p>}
      <Link to="favorites" className={styles.favoriteButton}>
        <Icons icon="faHeart" color="rgb(195, 196, 197)" size="25px" />
      </Link>
    </div>
  );
}
