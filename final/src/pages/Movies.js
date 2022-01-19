import { useEffect, useState } from "react";
// import MovieThumbnail from "../Components/MovieThumbnail";
import "../App.css";
import '../Visuals/Movie.css';
import MovieThumbnail from "../Components/MovieThumbnail";


const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&fbclid=IwAR3I44DSstLqakp4_H5O6ZxkKBs2NcZ6KybWd7yfDkj4X4TlhWhNflfwRK8"


function Movies() {
const [movies,setmovies] = useState([]);

useEffect(async () => {
    fetch(FEATURED_API)
    .then((res)=> res.json())
    .then((data) =>
    {
        console.log(data);
        setmovies(data.results);
    })


})

return(
    <div className="movie-container">
        {movies.map((movie)=> (
            <MovieThumbnail name={movie.title} score={movie.vote_average} {...movie}/>
        ))}
    </div>
)
}

export default Movies;
