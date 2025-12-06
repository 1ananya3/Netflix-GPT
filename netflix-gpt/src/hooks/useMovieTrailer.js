import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch()
    // const [trailedId, setTrailerId] = useState(null)

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const res = await data.json();
        // console.log("videos", res.results);
        const filteredData = res.results.filter((video) => (video?.type === "Trailer"))
        // console.log(filteredData)
        const trailer = filteredData.length ? filteredData[0] : res.results[0]
        // console.log(trailer)
        dispatch(addTrailerVideo(trailer))
        // setTrailerId(trailer.key)
    }
    useEffect(() => {
        getMovieVideos();
    }, [])

}
export default useMovieTrailer