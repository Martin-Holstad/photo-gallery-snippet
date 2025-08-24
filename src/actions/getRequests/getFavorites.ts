import { type Favorite } from "../../types/Favorite";

export default async function getFavorites(): Promise<Favorite[]> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  const favorites: Favorite[] = JSON.parse(localStorage.getItem("favorites") ?? "[]");

  return favorites;
}
