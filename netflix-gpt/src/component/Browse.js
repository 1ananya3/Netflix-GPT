import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {

  //Fetch data from TMDB API and update store - with custom hook
  useNowPlayingMovies()
  
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