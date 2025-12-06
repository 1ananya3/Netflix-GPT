import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getUpcomingMovies()
    }, [])
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const res = await data.json();
        // console.log(res.results)
        dispatch(addUpcomingMovies(res.results))
    }
}
export default useUpcomingMovies