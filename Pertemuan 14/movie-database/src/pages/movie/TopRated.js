import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import endpoints from "../../utils/constants/endpoints";

function TopRated() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTopRated();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getTopRated() {
        const response = await axios(endpoints.TOPRATED);

        setMovies(response.data.results);
    }

    return (
        <>
            <Hero />
            <Movies title="Top Rated" movies={movies} />
        </>
    );
}

export default TopRated;