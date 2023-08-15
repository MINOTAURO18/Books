import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import styles from "../nav/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <h1>JAMY-LIBRARY</h1>
      <div className={styles.buttons}>
        <button>boton</button>
        <button>boton</button>
        <button>boton</button>
        <button>boton</button>
      </div>

      <div className={styles.image}>
        <img src={sun} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
