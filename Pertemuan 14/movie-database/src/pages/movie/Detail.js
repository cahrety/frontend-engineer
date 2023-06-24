import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { useEffect, useState } from "react";
import axios from "axios";
import endpoints from "../../utils/constants/endpoints";

function Detail() {
    const params = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id]);

    async function getRecommendationMovies() {
        const response = await axios(endpoints.RECOMM(params.id));

        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <>
            <DetailMovie />
            <Movies title="Details" movies={movies} />
        </>
    )
}

export default Detail;