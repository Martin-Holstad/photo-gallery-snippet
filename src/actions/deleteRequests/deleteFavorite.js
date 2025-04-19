export default async function deleteFavorite(favorite) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const newFavorites = favorites.filter((fav) => fav.id != favorite.id);
  localStorage.setItem("favorites", JSON.stringify(newFavorites));
  return newFavorites;
}
