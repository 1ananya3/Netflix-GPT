import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const Browse = () => {

  //Fetch data from TMDB API and update store - with custom hook
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTopRatedMovies()
  
  return (
    <div>
      <Header />
      {/* MainContainer
            -VideoBackground
            -VideoTitle
          SecondaryContainer
            - MovieList*n
                - Card*n */}
      <MainContainer/>
      <SecondaryContainer/>          
    </div>
  )
}

export default Browse