import {useState, useEffect} from 'react'

import './index.css'

const MovieDetails = ({movieId}) => {
  const [movieDetails, setMovieDetails] = useState({})

  const {
    title,
    vote_average: ratings,
    poster_path: posterPath,
    runtime,
    genres,
    release_date: releaseDate,
    overview,
  } = movieDetails

  const fetchMovieDetails = async () => {
    const apiResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=0ccfbcc1d9659ca4526749ddb4daead0&language=en-US`,
    )
    const jsonResponse = await apiResponse.json()

    setMovieDetails(jsonResponse)
  }

  useEffect(() => {
    fetchMovieDetails()
  }, [])

  return (
    <section className="movie-details-section">
      <img
        className="movie-details-img"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
      />
      <div>
        <h1 className="movie-details-title">{title}</h1>
        <p>
          <span className="side-heading">Release Date:</span> {releaseDate}
        </p>
        <ul className="genre-list">
          {genres?.map(genre => (
            <li className="genre" key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
        <p>
          <span className="side-heading">Runtime:</span> {runtime}
        </p>
        <p>
          <span className="side-heading">Rating:</span> {ratings}
        </p>
        <p>
          <span className="side-heading">Overview:</span> <br /> {overview}
        </p>
      </div>
    </section>
  )
}

export default MovieDetails
