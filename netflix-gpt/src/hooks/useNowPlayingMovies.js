import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const res = await data.json();
        // console.log(res.results)
        dispatch(addNowPlayingMovies(res.results))
    }
}
export default useNowPlayingMovies