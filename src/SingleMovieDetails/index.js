import MovieDetails from '../MovieDetails'

import MovieCastDetails from '../MovieCastDetails'

import './index.css'

const SingleMovieDetails = props => {
  const {
    match: {
      params: {id},
    },
  } = props

  return (
    <div className="single-movie-page-container">
      <MovieDetails movieId={id} />

      <MovieCastDetails movieId={id} />
    </div>
  )
}

export default SingleMovieDetails
