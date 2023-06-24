import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import endpoints from "../../utils/constants/endpoints";

function NowPlaying() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getNowPlaying();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getNowPlaying() {
        const response = await axios(endpoints.NOWPLAYING);

        setMovies(response.data.results);
    }

    return (
        <>
            <Hero />
            <Movies title="Now Playing" movies={movies} />
        </>
    );
}

export default NowPlaying;