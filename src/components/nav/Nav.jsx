import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import styles from "../nav/nav.module.css";

const Nav = ({books, books2, setBooks}) => {
  console.log(books2)

  const handlerTerror = () => {
    
  }

  const handlerFiction = () => {
    
  }

  const handlerFantasia = () => {
    
  }

  const handlerAll = () => {
    
  }
  return (
    <nav className={styles.nav}>
      <h1>JAMY-LIBRARY</h1>
      <div className={styles.buttons}>
        <button onClick={handlerFiction}>boton</button>
        <button onClick={handlerTerror}>Terror</button>
        <button onClick={handlerFantasia}>boton</button>
        <button onClick={handlerAll}>boton</button>
      </div>

      <div className={styles.image}>
        <img src={sun} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
