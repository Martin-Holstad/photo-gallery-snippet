import { type Favorite } from "../../types/Favorite";

export default async function deleteFavorite(favorite: Favorite): Promise<Favorite[]> {
  const favorites: Favorite[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");
  const newFavorites = favorites.filter((fav) => fav.id != favorite.id);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));

  return newFavorites;
}
