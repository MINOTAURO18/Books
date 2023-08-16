import styles from "../cards/cards.module.css";


const Cards = ({ books }) => {
  return (
    <article className={styles.cards}>
      {books.allBooks.map((book, index) => {
        return (
          <div className={styles.card} key={index}>
            <img src={book.book.cover} />
            <span className={styles.title}>
              <h2>{book.book.title}</h2>
            </span>
          </div>
        );
      })}
    </article>
  );
};

export default Cards;
