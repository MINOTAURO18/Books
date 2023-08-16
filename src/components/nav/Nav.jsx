import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";
import styles from "../nav/nav.module.css";

const Nav = ({books, setBooks, darkMode, setDarkMode}) => {

  const handlerTerror = () => {
     setBooks({
      ...books,
      allBooks: books.allBooks2.filter(b => b.book.genre === "Terror"),
     })
  }

  const handlerFiction = () => {
    setBooks({
      ...books,
      allBooks: books.allBooks2.filter(b => b.book.genre === "Ciencia ficción"),
     })
  }

  const handlerFantasia = () => {
    setBooks({
      ...books,
      allBooks: books.allBooks2.filter(b => b.book.genre === "Fantasía"),
     })
  }

  const handlerAll = () => {
    setBooks({
      ...books,
      allBooks: books.allBooks2
    })
  }

  const DarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <nav className={`${styles.nav} ${darkMode  ? styles.black : styles.white} ` }>
      <h1>JAMY-LIBRARY</h1>
      <div className={styles.buttons}>
        <button onClick={handlerFiction}>Ficcion</button>
        <button onClick={handlerTerror}>Terror</button>
        <button onClick={handlerFantasia}>Fantasia</button>
        <button onClick={handlerAll}>All</button>
      </div>

      <div className={styles.image}>
        <img onClick={DarkMode}  src={darkMode ? sun : moon} alt="" />
      </div>
    </nav>
  );
};

export default Nav;
