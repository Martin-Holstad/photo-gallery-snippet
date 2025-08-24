import { type Dispatch, type SetStateAction } from "react";
import { type Photo } from "../../../types/Photo";
import isPhotoInFavorites from "../../../utils/isPhotoInFavorites";
import addToFavorites from "../../../actions/postRequests/addToFavorites";
import deleteFavorite from "../../../actions/deleteRequests/deleteFavorite";

type FavButtonClickArgs = {
  event: React.MouseEvent;
  photo: Photo;
  favorites: Photo[];
  setFavorites: Dispatch<SetStateAction<Photo[]>>;
};

export default async function favButtonClick({ event, photo, favorites, setFavorites }: FavButtonClickArgs): Promise<void> {
  event.stopPropagation();
  try {
    if (isPhotoInFavorites({ id: photo.id, favorites: favorites })) {
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
