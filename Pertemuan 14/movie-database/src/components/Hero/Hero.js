import { useState, useEffect } from "react";
// import styles from "./Hero.module.css";
import Button from "../ui/Button/Button";
import StyledHero from "./Hero.styled";
import axios from "axios";
import endpoints from "../../utils/constants/endpoints";

function Hero() {
    const [movie, setMovie] = useState("");

    // eslint-disable-next-line no-unused-vars
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() => {
        getDetailMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getTrendingMovie() {
        const response = await axios(endpoints.HEROT);
        return response.data.results[0];
    }

    async function getDetailMovies() {
        const trendingMovies = await getTrendingMovie();
        const id = trendingMovies.id;

        const response = await axios(endpoints.HEROD(id));

        setMovie(response.data);
    }

    return (
        <StyledHero>
            <section>
                <div className="hero__left">
                    <h2>{movie.title}</h2>
                    <h4>
                        {genres}
                    </h4>
                    <p>
                        {movie.overview}
                    </p>
                    <Button variasi="primary" size="m" as="a" href={`https://www.youtube.com/watch?v=${trailer}`} target="_blank">Watch Now</Button>
                </div>
                <div className="hero__right">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} all="placeholder" alt="" />
                </div>
            </section>
        </StyledHero>
    );
}
export default Hero;