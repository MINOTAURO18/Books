import Cards from "../../components/cards/Cards";

const Home = ({ books }) => {
  return (
    <section>
          <Cards books={books} />
    </section>
  );
};

export default Home;
