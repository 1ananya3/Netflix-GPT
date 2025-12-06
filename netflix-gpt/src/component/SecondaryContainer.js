import MovieList from "./MovieList.js"
import { useSelector } from "react-redux";

const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movies)
    // const popularMovies=useSelector(store=>store.movies.popularMovies)
 return (
        // movies.nowPlayingMovies && 
        // (
        <div className="bg-black">
            <div className="-mt-64 pl-6 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            </div>
            {/* 
            MovieList-Polular
              MovieCard*n
            MovieList-Now playing
            MovieList-Trending
            MovieList-Horror
             */}
        </div>
        // )
    )
}
export default SecondaryContainer;