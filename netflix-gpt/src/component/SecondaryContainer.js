import MovieList from "./MovieList.js"
import { useSelector } from "react-redux";
const SecondaryContainer=()=>{
    const movies=useSelector(store=>store.movies)
 return (
        // movies.nowPlayingMovies && 
        // (
        <div className="bg-black w-screen">
            <div className="-mt-64 pl-6 relative z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
            </div>
        </div>
        // )
    )
}
export default SecondaryContainer;