import {useState, useEffect} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import Header from '../Header'
import MovieItem from '../MovieItem'

import Pagination from '../Pagination'

const TopRatedMovies = ({history}) => {
  const [page, setPage] = useState(1)
  const [apiResponse, setApiResponse] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const {results} = apiResponse
  const navigateToMovie = movieId => {
    history.push(`/movies/${movieId}`)
  }

  const fetchTopRatedMovies = async () => {
    setIsLoading(true)
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=0ccfbcc1d9659ca4526749ddb4daead0&language=en-US&page=${page}`,
    )
    const responseJson = await response.json()
    setApiResponse(responseJson)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchTopRatedMovies()
  }, [page])

  const renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="brown" height="50" width="50" />
    </div>
  )

  return (
    <div className="top-rated-movies-container">
      <Header />
      {isLoading ? (
        renderLoader()
      ) : (
        <div className="movies-container">
          <ul className="movies-list">
            {results.map(eachMovie => (
              <MovieItem
                key={eachMovie.id}
                movieDetails={eachMovie}
                navigateToMovie={navigateToMovie}
              />
            ))}
          </ul>
          <Pagination page={page} setPage={setPage} />
        </div>
      )}
    </div>
  )
}

export default TopRatedMovies
