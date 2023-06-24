import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Main() {

  return (
    <main>
      <Hero />
      <Movies title="Latest Movie" />
    </main>
  );
}

function Home({ movies }) {
  return (
    <>
      <Main movies={movies} />
    </>
  );
}

export default Home;
