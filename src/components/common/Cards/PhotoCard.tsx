import styles from "./PhotoCard.module.css";
import { type Photo } from "../../../types/Photo";
import { useAppContext } from "../../../context/AppContext";
import isPhotoInFavorites from "../../../utils/isPhotoInFavorites";
import Icons from "../Icons/Icons";
import favButtonClick from "./favButtonClick";

type PhotoCardProps = {
  photo: Photo;
};

export default function PhotoCard({ photo }: PhotoCardProps) {
  const { favorites, setFavorites } = useAppContext();

  return (
    <div className={styles.photo}>
      <div className={styles.favoriteButton} onClick={(event) => favButtonClick({ event, photo, favorites, setFavorites })}>
        <Icons icon={`${isPhotoInFavorites({ id: photo.id, favorites: favorites }) ? "faHeart" : "faHeartRegular"}`} color="red" size="25px" />
      </div>
      <img src={photo.src} alt={photo.alt} />
    </div>
  );
}
