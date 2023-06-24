import { useSelector } from "react-redux";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";

function Movies(props) {
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.movies}>
          <h2 className={styles.movies__title}>{title}</h2>
          <div className={styles.movies__container}>
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Movies;
