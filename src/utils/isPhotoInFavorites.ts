import { type Favorite } from "../types/Favorite";

type FindFavArgs = {
  id: number;
  favorites: Favorite[];
};

export default function isPhotoInFavorites({ id, favorites }: FindFavArgs): boolean {
  const foundFav = favorites.find((fav) => fav.id === id);

  if (!foundFav) return false;

  return true;
}
