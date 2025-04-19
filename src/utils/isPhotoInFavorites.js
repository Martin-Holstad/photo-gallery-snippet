export default function findFav(id, favorites) {
  const foundFav = favorites.find((fav) => fav.id === id);

  if (!foundFav) return false;

  return true;
}
