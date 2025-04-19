export default async function getFavorites() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites;
}
