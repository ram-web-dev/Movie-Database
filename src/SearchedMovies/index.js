import {useState, useEffect, useContext} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import searchContext from '../context/searchContext'

import Header from '../Header'
import MovieItem from '../MovieItem'

import Pagination from '../Pagination'

const SearchedMovies = ({history}) => {
  const {searchInput} = useContext(searchContext)
  const [page, setPage] = useState(1)
  const [apiResponse, setApiResponse] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const {results} = apiResponse

  const navigateToMovie = movieId => {
    history.push(`/movies/${movieId}`)
  }

  const fetchSearchedMovies = async () => {
    setIsLoading(true)
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=0ccfbcc1d9659ca4526749ddb4daead0&language=en-US&query=${searchInput}&page=1`,
    )
    const responseJson = await response.json()
    setApiResponse(responseJson)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchSearchedMovies()
  }, [page])

  const renderLoader = () => (
    <div className="loader-container">
      <Loader type="ThreeDots" color="brown" height="50" width="50" />
    </div>
  )

  return (
    <div className="searched-movies-container">
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

export default SearchedMovies
