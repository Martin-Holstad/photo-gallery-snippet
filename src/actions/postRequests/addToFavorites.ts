import { type Favorite } from "../../types/Favorite";

export default async function addToFavorites(favorite: Favorite): Promise<Favorite[]> {
  const favorites: Favorite[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  favorites.push(favorite);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  return favorites;
}
