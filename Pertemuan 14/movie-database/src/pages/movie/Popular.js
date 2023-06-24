import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies.js"
import endpoints from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../components/features/moviesSlice";

function Popular() {
    const dispatch = useDispatch();

    useEffect(() => {
        getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getPopularMovies() {
        const response = await axios(endpoints.POPULAR);
        const movies = response.data.results;

        dispatch(updateMovies(movies));
    }

    return (
        <>
            <Hero />
            <Movies title="Popular" />
        </>
    );
}

export default Popular;