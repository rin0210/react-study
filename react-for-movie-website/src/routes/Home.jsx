import { useState, useEffect } from "react"
import Movie from "../components/Movie"
import styles from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    // const getMovies = async () => {
    //     const response = await fetch(`https://movies-api.accel.li/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`)
    //     const json = await response.json()
    //     setMovies(json.data.movies)
    //     setLoading(false)
    // }

    useEffect(() => {
        const getMovies = async () => {
            const json = await (await fetch(`https://movies-api.accel.li/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json()
            //const json = await response.json()
            setMovies(json.data.movies)
            setLoading(false)
        }
        getMovies()
    }, [])
    console.log(movies)
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home