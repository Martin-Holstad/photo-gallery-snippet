import styles from "./Navigation.module.css";
import FavoriteButton from "./FavoriteButton";

export default function Navigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Photo Gallery</div>
      <FavoriteButton />
    </header>
  );
}
