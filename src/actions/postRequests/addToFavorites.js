export default async function addToFavorites(favorite) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  favorites.push(favorite);

  localStorage.setItem("favorites", JSON.stringify(favorites));

  return favorites;
}
