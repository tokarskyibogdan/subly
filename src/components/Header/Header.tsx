import styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="logo.svg" alt="Subly"/>
    </header>
  );
}

export default Header;
