import styles from '../cards/cards.module.css'

const Cards = ({ books }) => {
  return (
    <article className={styles.cards}>
      {books.map((book, index) => {
        return (
          <div className={styles.card} key={index}>
            <img src={book.book.cover} />
            <span className={styles.title}>
              <h2>ABOUT</h2>
            </span>
          </div>
        );
      })}
    </article>
  );
};

export default Cards;
