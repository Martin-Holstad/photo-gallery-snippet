import isPhotoInFavorites from "../../../utils/isPhotoInFavorites";
import addToFavorites from "../../../actions/postRequests/addToFavorites";
import deleteFavorite from "../../../actions/deleteRequests/deleteFavorite";

export default async function favButtonClick({ event, photo, favorites, setFavorites }) {
  event.stopPropagation();
  try {
    if (isPhotoInFavorites(photo.id, favorites)) {
      const results = await deleteFavorite(photo);
      setFavorites([...results]);
      return;
    }
    const results = await addToFavorites(photo);
    setFavorites([...results]);
  } catch (error) {
    console.error(error);
  }
}
