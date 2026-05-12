import { useEffect } from "react";
import { useParams } from "react-router"
function Detail() {
    const { id } = useParams()
    const getMovies = async () => {
        const json = await (await fetch(`https://movies-api.accel.li/api/v2/movie_details.json?movie_id=${id}`)).json()
        console.log(json);
    }
    useEffect(() => {
        getMovies();
    }, [])
    console.log(id);
    return <h1>Detail</h1>
}

export default Detail