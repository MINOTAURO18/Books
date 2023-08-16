import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import styles from "../nav/nav.module.css";

const Nav = ({books, setBooks, darkMode, setDarkMode}) => {

  const handlerTerror = () => {
    
  }

  const handlerFiction = () => {
    
  }

  const handlerFantasia = () => {
    
  }

  const handlerAll = () => {
    
  }

  const DarkMode = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true)
  }
  return (
    <nav className={`${styles.nav} ${darkMode  ? styles.black : styles.white} ` }>
      <h1>JAMY-LIBRARY</h1>
      <div className={styles.buttons}>
        <button onClick={handlerFiction}>boton</button>
        <button onClick={handlerTerror}>Terror</button>
        <button onClick={handlerFantasia}>boton</button>
        <button onClick={handlerAll}>boton</button>
      </div>

      <div className={styles.image}>
        <img onClick={DarkMode}  src={darkMode ? sun : moon} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
