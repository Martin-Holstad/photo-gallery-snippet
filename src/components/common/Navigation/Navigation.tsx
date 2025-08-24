import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Photo Gallery
      </Link>
      <FavoriteButton />
    </header>
  );
}
