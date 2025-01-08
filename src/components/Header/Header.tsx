import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
